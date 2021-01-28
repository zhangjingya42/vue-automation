// 点击返回上一页
import router from '../../router/index'
const formMixin={
    methods:{
        goback(){
            router.go(-1)
        }
    }
}
export default formMixin