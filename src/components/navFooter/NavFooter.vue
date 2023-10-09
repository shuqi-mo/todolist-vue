<template>
    <div class="container">
        <div class="box">
            已完成<div class="num">{{ isComplete }}</div> / 全部 <div class="num">{{ list.length }}</div>
        </div>
        <div v-if="isComplete > 0">
        <button @click="clear" class="btn">清除已完成</button>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
export default defineComponent ({
    name:'navFooter',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    setup(props, ctx) {
        let isComplete = computed(() => {
            let arr = props.list.filter(item =>{
                return item.complete
            })
            return arr.length
        })
        // 清除已完成
        let clear = () => {
            let uncompletedList = props.list.filter(item =>{
                return item.complete === false
            })
            ctx.emit('clear', uncompletedList)
        }
        return {
            isComplete,
            clear
        }
    }
})
</script>

<style scoped lang='scss'>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    .btn {
        margin-left: 10px;
        background-color: #f44336;
        border: none;
        color: white;
        padding: 6px 10px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 8px;
        cursor: pointer;
    }
    .box {
        display: flex;
    }

    .num {
        display: table-cell;
        border-radius: 18px;
        background-color: #003366;
        width: 20px;
        height: 20px;
        text-align: center;
        vertical-align: middle;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        margin-left: 2px;
    }
}
</style>
