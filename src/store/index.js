// main.js引入store全局注入
import Vue from 'vue';
import Vuex from 'vuex';
import collection from './modules/collection'
import footerStatus from './modules/footerStatus'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        collection,
        footerStatus
    },
    state:{ //要设置的全局访问的state对象
        // 设置初始属性值
        count:1,
        showLoading:false,
         // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
    },
    getters:{ //实时监听state值的变化（最新状态）
        // 方法名随意
        getcount:state=>{
            return state.count+1
        }
    },
    mutations:{//唯一允许更改state
        showLoading(state, status) {
            state.showLoading = status
          },
        add(state,n){
            state.count=state.count+n
        },
        remove(state){
            state.count=state.count-1
        },
        //修改token,并将token存入localStorage
        changeLogin(state,user){
            console.log(state,user)
           state.Authorization=user.Authorization;
           localStorage.setItem("Authorization",user.Authorization)
        }
    },
    actions:{//触发更改
        showLoading ({ commit }, status) {
            commit('showLoading', status)
          },
        addFun(context,n){
            context.commit("add",n)
        },
        removeFun(context){
            context.commit("remove")
        }

    }
});
 
export default store;