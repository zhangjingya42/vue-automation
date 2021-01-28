import store from "../store"
// 获取基本配置的url
export const configUrl="http://studioapi.bangniyin08.com"

export const studioUrl=()=>{
    let url="";
    if(store.state.studioConfig&&store.state.studioConfig.studioWebsiteApiUrl){
        url=store.state.studioConfig.studioWebsiteApiUrl;
    }
    return url;
}
//导出订单的url
export const exportOrderUrl=()=>{
    let url="";
    if(store.state.studioConfig&&store.state.studioConfig.factoryWebsiteApiUrl){
      url=store.state.studioConfig.factoryWebsiteApiUrl;
    }
    return url;
  }