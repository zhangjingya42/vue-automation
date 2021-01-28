import axios from 'axios';
// require("babel-polyfill");
import { configUrl,studioUrl } from './url';
// import md5 from 'js-md5';
import router from '../router';
import store from '@/store';
// import $vue from '../main.js';

var request = axios.create({
  timeout: 120000,
});
// 前后端判断用的 sign 前端传的参数和后端接收得参数经过特殊加密后 一样才接口通过 把数组 和 数组下的 对象 全部拼成对象 其实是拼装成字符串
// 例如：
  // let a=[
  //   {
  //     a:1,
  //     b:{
  //       c:2,
  //       d:3
  //     }
  // },{
  //   a:1,
  //   b:{
  //     c:2,
  //     d:3
  //   }
  // }]
  // 变成 'a=1&&c=2&&d=3&&a=1&&c=2&&d=3'

function sortObj(params) {
  let sortedStr = '';
  let keys = Object.keys(params).sort();
  for (let key of keys) {
    if (Array.isArray(params[key])) {
      if (Object.prototype.toString.call(params[key][0]) === '[object Object]') {
        for (let obj of params[key]) {
          sortedStr += (key + "=" + sortObj(obj));
        }
      } else {
        sortedStr += (key + "=" + JSON.stringify(params[key]));
      }
    } else {
      sortedStr += (key + "=" + params[key]);
    }
  }
  return sortedStr;
}

function ajax(opt,method){
  console.log(opt)
  //业务域名不存在就强制重新登录
  // if(!studioUrl()){
  //   sessionStorage.clear();
  //   localStorage.clear();
  //   router.replace("/login");
  // }
  if(opt.special){
    // request.defaults.baseURL=configUrl;
    request.defaults.baseURL=process.env.BASE_URL;
  }else{
    request.defaults.baseURL=studioUrl();
  }
  var token=store.state.token||"ailisi";
  var timestamp=new Date().getTime();
  var params;
  if(opt.params){
    //对传入的参数进行深拷贝，防止传入的参数对象被页面上其他逻辑改变，导致签名错误
    params=JSON.parse(JSON.stringify(opt.params));
  }else{
    // params={1:1}
  }
  // params.token=token;
  //axios会自动过滤值为undefined和null的参数，因此手动去掉这些参数，不让其参与签名，避免出现签名错误
  for (let key in params){
    if(params[key]==null){
      delete params[key]
    }
  }
  // const sign = md5(sortObj(params) + 'diyToken');
  const sign = 'diyToken'
  var config={
    url: opt.url,
    method: method,
    headers:{
      token:token,
      timestamp:timestamp,
      sign:sign
    }
  }
  method==="GET"&&(config.params=params);
  method==="POST"&&(config.data=params);
  return new Promise((resolve,reject)=>{
    request(config).then(res=>{
      if(res.data.code==2){
        console.log(111);
        sessionStorage.clear();
        localStorage.clear();
        router.replace("/login");
        reject(res.data)
      }else{
        resolve(res.data)
      }
    }).catch(res=>{
      $vue.$message.error("请求失败");
      reject(res)
    })
  })
}


export function ajaxGet (opt) {
  return ajax(opt,"GET")
}

export function ajaxPost (opt) {
  return ajax(opt,"POST")
}
// 表格导出
export function reqExpost (method, url, params) {
  const timestamp = new Date().getTime().toString();
  params.token = store.state.token||"ailisi";
  const keys = Object.keys(params).sort(); let i; const length = keys.length; let key; let sortedString = '';
  for (i = 0; i < length; i++) {
    key = keys[i];
    sortedString += (key + '=' + params[key]);
  }
  // md5数据加密
  const sign = md5(sortedString + 'yisuperiorToken');
  console.info(sign);
  return axios({
    method: method,
    url: url,
    headers: {
      'Content-Type': 'application/json',
      timestamp: timestamp,
      sign: sign,
      token:store.state.token||"ailisi"
    },
    data: params,
    responseType: 'blob' // 表明返回服务器返回的数据类型】
  }).then(res => res.data);
};
