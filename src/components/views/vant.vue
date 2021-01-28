<template>
    <div>
        <!-- 调用摄像头 -->
        <van-uploader :after-read="afterRead"  v-model="fileLists"  :max-count="1" />
        <van-uploader v-model="files" multiple :after-read="afterRead1" :max-count="1" class="sc" />
        <button @click="goback()">点击返回上一页</button>
        <button @click="message()">点击弹出组件信息</button>
        <p>--------------------------------------------</p>
        <button @click="showsure()">vuex点击显示按钮</button><button  @click="showfalse()">vuex点击影藏按钮</button>
        <!-- vuex状态管理  showLoading设置了初始值 -->
        <button v-show="this.$store.state.showLoading">按钮</button>
    </div>
</template>
<script>
   // 引入返回上一页组件
   import formMixin from '../../assets/js/form_com.js'
//    引入弹出信息组件
   import _g from '../../assets/js/global.js'
    export default {
        mixins: [formMixin],
        data() {
            return {
                fileList: [],
                fileLists:[],
                files:[]
            }
        },
        methods: {
            // 点击显示
            showsure(){
                _g.openGlobalLoading()
            },
            // 点击影藏
            showfalse(){
            _g.closeClobalLoading()
            },
            message(){
            //  点击弹出信息 可以用在请求成功或失败
            // _g.toastMsg('error', res.error)
            _g.toastMsg('success', '修改成功')
            },
            afterRead(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
                console.log("文件1")
            },
            afterRead1(file) {
                // 此时可以自行将文件上传至服务器
                console.log(file);
                console.log("文件2")
            }
        }
    }
</script>