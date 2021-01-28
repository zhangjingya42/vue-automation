const state={
    collects:['hi'],  //初始化一个colects数组
    field: '空天作战任务规划',
    views:'1',
    num:'10'
  };
  
  const getters={
  
  };
  
  const mutations={
    addvies(state){
        state.views++
    },
    blogadd(state){
        state.num++ 
    }
  };
  
  const actions={
    //   commit:同步，
    Actionslsit({commit}){
          commit('addvies')
      }
  
  };
  
  export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
  }