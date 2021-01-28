<!-- 用于存放一下可以复用的子组件 -->
<template>
    <div>
        <button @click="getbutton">{{text||msg}}</button>
        <!-- <button @click="getbutton">{{msg}}{{aaa}}</button> -->
    </div>
</template>
<script>
    export default{
        name:"cc",
        props:["text"],
        // props:["aaa"],
        data(){
            return{
                msg:'这是子组件，可重复用组件1',
                mun:"点击我变得值"
            }
        },
        methods:{
            // 点击按钮的时候 像父组件传值
            getbutton(){
            // 父组件传给子组件的值通过props接收，子组件通过$emit向父组件传值
                this.$emit('message',this.msg)
            }
        },
    }
</script>
<style>

</style>