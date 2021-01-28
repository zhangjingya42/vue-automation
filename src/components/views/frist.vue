<!-- 父组件 -->
<template>
    <div>
        <p>
        <div>{{msg}}</div>
        <div>{{this.$store.state.count}}</div>
        <div>getters获取计算后的值：{{this.$store.getters.getcount}}</div>
        <button @click="removeFun">-</button>
        <input type="text" v-model="this.$store.state.count">
        <button @click="addFun">+</button>
        {{count1}}
        </p>
        <Confirm text="注册" :aaa="abc" @message="getmessage"></Confirm>
        <!-- store加了modules文件有collection.js和footerStatue -->
        <p>
        <div>{{name}}</div>
        <div>{{address}}</div>
        <div>{{school}}</div>
        <div>{{field}}</div>
        <div><button @click="changeSchool()">点击改变值</button></div>
        <div><button @click="tota()">改变值1</button></div>
        <div>{{views}}</div>
        <div><button @click="kua()">点击跨域接口</button></div>
        <!-- mp4视频 -->
        <videoPlayer :mp4Url="mp4Url" ::mp4Pic="mp4Pic"></videoPlayer>
        <!-- 列表组件 -->
        <!-- @jieshou='handle' 指接受子组件传过来的值 -->
        <!-- :list='listyi' 指传给子组件的值 -->
        <transList :list='listyi' @jieshou='handle'></transList>
        <!-- 连级选择器 -->
        <el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover',multiple: true }"
            @change="handleChange">
        </el-cascader>
        </p>
        <div class="weui-cells weui-cells_form" style="margin-top: 0px;">
            <form id="importFileForm" method="post" enctype="multipart/form-data">
                <input name="imgType" value="934" type="hidden">
                <div class="weui-panel weui-panel_access">
                    <div class="weui-cell">
                        <div class="weui-cell__bd">
                            <div class="weui-uploader">
                                <div class="weui-uploader__bd">
                                    <div style="width:100%; float:left">
                                        <div class="weui_uploader_filesss">
                                            <!-- 插入图片预览 -->
                                        </div>
                                        <div class="weui-uploader__input-box" style="margin-top:5px;"></div>
                                        <div style="clear:both;"></div>
                                    </div>
                                    <input id="uploader" name="fileUpload" class="weui_uploader_input js_file"
                                        style="display: none" type="file" capture="camera" accept="image/*">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <p>---------------------------------------------------------------</p>
        <router-link :to="{name:'vant'}"><button>点击跳转到下一页 下页面有部分组件可点击查看效果</button> </router-link>
        <p>---------------------------------------------------------------</p>
        <div>
            <input type="text" v-model="loginForm.username" placeholder="用户名" /><br>
            <input type="text" v-model="loginForm.password" placeholder="密码" /><br>
            <button @click="login">登录</button>
        </div>
        <br>

    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'
    import Confirm from "@/components/sub/Confirm.vue"
    import { reqStudioConfig, reqStudioConfigGet } from '@/api/api'
    // 引入MP4组件
    import videoPlayer from '../sub/video.vue'
    // 引入列表组件
    import transList from '../sub/transList.vue'
    export default {
        name: "frist",
        components: {
            Confirm,
            videoPlayer,
            transList
        },
        data() {
            return {
                loginForm: {
                    username: '',
                    password: ''
                },
                value: '',
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }, {
                            value: 'fankui',
                            label: '反馈'
                        }, {
                            value: 'xiaolv',
                            label: '效率'
                        }, {
                            value: 'kekong',
                            label: '可控'
                        }]
                    }, {
                        value: 'daohang',
                        label: '导航',
                        children: [{
                            value: 'cexiangdaohang',
                            label: '侧向导航'
                        }, {
                            value: 'dingbudaohang',
                            label: '顶部导航'
                        }]
                    }]
                }, {
                    value: 'zujian',
                    label: '组件',
                    children: [{
                        value: 'basic',
                        label: 'Basic',
                        children: [{
                            value: 'layout',
                            label: 'Layout 布局'
                        }, {
                            value: 'color',
                            label: 'Color 色彩'
                        }, {
                            value: 'typography',
                            label: 'Typography 字体'
                        }, {
                            value: 'icon',
                            label: 'Icon 图标'
                        }, {
                            value: 'button',
                            label: 'Button 按钮'
                        }]
                    }, {
                        value: 'form',
                        label: 'Form',
                        children: [{
                            value: 'radio',
                            label: 'Radio 单选框'
                        }, {
                            value: 'checkbox',
                            label: 'Checkbox 多选框'
                        }, {
                            value: 'input',
                            label: 'Input 输入框'
                        }, {
                            value: 'input-number',
                            label: 'InputNumber 计数器'
                        }, {
                            value: 'select',
                            label: 'Select 选择器'
                        }, {
                            value: 'cascader',
                            label: 'Cascader 级联选择器'
                        }, {
                            value: 'switch',
                            label: 'Switch 开关'
                        }, {
                            value: 'slider',
                            label: 'Slider 滑块'
                        }, {
                            value: 'time-picker',
                            label: 'TimePicker 时间选择器'
                        }, {
                            value: 'date-picker',
                            label: 'DatePicker 日期选择器'
                        }, {
                            value: 'datetime-picker',
                            label: 'DateTimePicker 日期时间选择器'
                        }, {
                            value: 'upload',
                            label: 'Upload 上传'
                        }, {
                            value: 'rate',
                            label: 'Rate 评分'
                        }, {
                            value: 'form',
                            label: 'Form 表单'
                        }]
                    }, {
                        value: 'data',
                        label: 'Data',
                        children: [{
                            value: 'table',
                            label: 'Table 表格'
                        }, {
                            value: 'tag',
                            label: 'Tag 标签'
                        }, {
                            value: 'progress',
                            label: 'Progress 进度条'
                        }, {
                            value: 'tree',
                            label: 'Tree 树形控件'
                        }, {
                            value: 'pagination',
                            label: 'Pagination 分页'
                        }, {
                            value: 'badge',
                            label: 'Badge 标记'
                        }]
                    }, {
                        value: 'notice',
                        label: 'Notice',
                        children: [{
                            value: 'alert',
                            label: 'Alert 警告'
                        }, {
                            value: 'loading',
                            label: 'Loading 加载'
                        }, {
                            value: 'message',
                            label: 'Message 消息提示'
                        }, {
                            value: 'message-box',
                            label: 'MessageBox 弹框'
                        }, {
                            value: 'notification',
                            label: 'Notification 通知'
                        }]
                    }, {
                        value: 'navigation',
                        label: 'Navigation',
                        children: [{
                            value: 'menu',
                            label: 'NavMenu 导航菜单'
                        }, {
                            value: 'tabs',
                            label: 'Tabs 标签页'
                        }, {
                            value: 'breadcrumb',
                            label: 'Breadcrumb 面包屑'
                        }, {
                            value: 'dropdown',
                            label: 'Dropdown 下拉菜单'
                        }, {
                            value: 'steps',
                            label: 'Steps 步骤条'
                        }]
                    }, {
                        value: 'others',
                        label: 'Others',
                        children: [{
                            value: 'dialog',
                            label: 'Dialog 对话框'
                        }, {
                            value: 'tooltip',
                            label: 'Tooltip 文字提示'
                        }, {
                            value: 'popover',
                            label: 'Popover 弹出框'
                        }, {
                            value: 'card',
                            label: 'Card 卡片'
                        }, {
                            value: 'carousel',
                            label: 'Carousel 走马灯'
                        }, {
                            value: 'collapse',
                            label: 'Collapse 折叠面板'
                        }]
                    }]
                }, {
                    value: 'ziyuan',
                    label: '资源',
                    children: [{
                        value: 'axure',
                        label: 'Axure Components'
                    }, {
                        value: 'sketch',
                        label: 'Sketch Templates'
                    }, {
                        value: 'jiaohu',
                        label: '组件交互文档'
                    }]
                }],
                // 将数据给组件
                listyi: [{
                    name: "151****1234",
                    vip: "V2",
                    num: 100,
                    price: 20,
                    buyNum: 0,
                    saleNum: 10,
                    dealer: "1311221"
                },
                ],
                msg: '欢迎父组件',
                abc: '父组件传子组件的值',
                mp4Url: '',
                mp4Pic: '这是一个视频'
            }
        },
        created() {
            //     // "zhinan", "shejiyuanze", "yizhi"
            //    var aa="zhinan,shejiyuanze,yizhi"
            //    this.value=aa.split(',')
            // this.value="zhinan,shejiyuanze,yizhi"

            this.mp4Url = require('../../assets/img/1通讯录4.mp4')

            console.log(this.mp4Url)
        },
        methods: {
            ...mapMutations(['changeLogin']),
            // 点击登录
            login() {
                let _this = this;
                if (this.loginForm.username === '' || this.loginForm.password === '') {
                    alert('账号或密码不能为空');
                }
            },
            handleChange(value) {
                console.log(value);
            },
            // 对子组件传过来的值进行打印
            handle(item) {
                // 接收一个参数时
                console.log(item)
                // console.log(`子组件传递过来的数据: ${item}`);
                // 接收多个参数时
                // this.msg1 = item[0];
                // this.msg2 = item[1];
            },
            kua() {
                reqStudioConfigGet().then(res => {
                    console.log(res)
                })
            },
            removeFun() {
                this.$store.dispatch("removeFun", 1)
            },
            addFun() {
                let n = 2;
                this.$store.dispatch("addFun", n)
            },
            getmessage(val) {
                alert(val)
            },
            changeSchool() {
                this.$store.dispatch('footerStatus/_changeSchool', '北大')
                const data = {
                    aa: 'q'
                }
                reqStudioConfig(data).then(res => {
                    console.log(res)
                })
            },
            ...mapActions('collection', {
                tota: 'Actionslsit'// clickTotal 是mutation 里的方法，totalAlise是重新定义的一个别名方法，本组件直接调用这个方法
            })

        },
        computed: {
            ...mapState({
                count1: state => state.count
            }),

            // 2 store加了modules文件有collection.js和footerStatue 
            ...mapState({
                name: state => state.footerStatus.name,
                address(state) {
                    return state.footerStatus.address
                }
            }),
            ...mapState('footerStatus', {
                school: 'school'
            }),

            ...mapState('collection', ['field']),
            // ...mapGetters('collection',{
            //     arrList:'renderCollects'
            // })
            ...mapState('collection', {
                views: 'views'
            }),
        }
    }
</script>
<style lang="less" scoped>

</style>