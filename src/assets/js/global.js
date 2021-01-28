// 内容是根据无纸化来的
import Vue from 'vue'
import {Message} from 'element-ui'
import bus from '../js/bus'
import store from '../../store/index'
Vue.prototype.$message=Message
const commonFn={
    // 显示和隐藏
    // dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('action方法名',值)
    // commit：同步操作，写法：this.$store.commit('mutations方法名',值)
    closeClobalLoading(){
        setTimeout(()=>{
            store.dispatch('showLoading',false)
        },0)
    },
    openGlobalLoading(){
        setTimeout(()=>{
            store.dispatch('showLoading',true)
        },0)
    },
    // message弹出信息提醒
    toastMsg(type,msg){
        switch(type){
            case 'normal':
                bus.$message(msg)
                break
                case 'success':
                    bus.$message({
                       message:msg,
                       type:'success'
                    })
                    break
                case 'warning':
                    bus.$message({
                        message:msg,
                        type:'warning'
                     })
                     break
                 case 'error':
                        bus.$message.error(msg)
                        break
        }
    }
}
export default commonFn