<template>
    <!-- 组件 -->
    <div>
        <br>
        <div v-for="item in list">
            {{item.name}}、
            {{item.vip}}、
            {{item.num}}、
            {{item.price}}、
            <button  @click="handleTrans(item)">点击时间</button>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            list:Array
        },
        data() {
            return {
             
            }
        },
        // 传递方法  进行绑定
        methods: {
            handleTrans(item){
                // 将打印出来的数据传给frist
                // $emit传递一个参数时
               this.$emit('jieshou',item)
            //    $emit传递多个参数时
            //    this.$emit('jieshou',false,true);
            }
        }
    }
</script>