const state={   //要设置的全局访问的state对象
    name: 'beautiful',
    address: 'Hunan Changsha',
    school: '国防科大',
    showFooter: true,
    changableNum:0
    //要设置的初始属性值
  };
  
  const getters = {   //实时监听state值的变化(最新状态)
  
  };
  
  const mutations = {
    changeSchool(state, value){
      state.school = value;
    }
  };
  
  const actions = {
    _changeSchool(context, value){
      context.commit('changeSchool', value)
    }
  };
  
  export default {
    namespaced: true, //用于在全局引用此文里的方法时标识这一个的文件名
    state,
    getters,
    mutations,
    actions
  }