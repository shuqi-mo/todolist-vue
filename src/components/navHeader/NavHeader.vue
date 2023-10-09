<template>
    <div>
        <input placeholder="请输入任务名称"
        v-model="value"
        @keydown.enter="enter"
        />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent ({
    name:'navHeader',
    setup(props, ctx) {
        let value = ref('')
        // 回车添加任务
        let enter = () => {
            // 把输入框内容分发给父组件
            ctx.emit('add', value.value)
            // console.log(value.value)
            value.value = ""
        }
        return {
            value,
            enter
        }
    }
})
</script>

<style scoped lang='scss'>
    input {
        margin-bottom: 10px;
        margin-top: 10px;
        height: 25px;
        margin-left: 50px;
        width: 80%;
    }
</style>
