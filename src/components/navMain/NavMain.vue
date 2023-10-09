<template>
    <div v-if="list.length > 0">
        <div v-for="(item,index) in list" :key="index">
            <div class="item">
                <input type="checkbox" @click="update(item, index)" v-model="item.complete">
                {{ item.title }}
                <button class="del" @click="del(item,index)">删除</button>
            </div>
        </div>
    </div>
    <div v-else class="none">
        暂无任务0.0
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
export default defineComponent ({
    name:'navMain',
    props: {
        list: {
            type: Array,
            required: true
        }
    },
    emits: ['del', 'update'],
    setup(props, ctx) {

        let del = (item, index) => {
            ctx.emit('del', index)
        }
        let update = (item, index) => {
            // if (props.list[index].complete == true) {
            //     props.list[index].complete = false
            // }
            // else {
            //     props.list[index].complete = true
            // }
            // console.log(index)
            // console.log(props.list[index].complete)
            ctx.emit('update', props.list)
        }
        return {
            del,
            update
        }
    }
})
</script>

<style scoped lang='scss'>
    .item {
        height: 35px;
        line-height: 35px;
        position: relative;
        width: 80%;
        margin-left: 50px;
        button {
            position: absolute;
            right: 20px;
            top: 5px;
            display: none;
            z-index: 99;
            background-color: #f44336;
            color: white;
            border: none;
            height: 25px;
            width: 40px;
            border-radius: 8px;
            cursor: pointer;
        }
        // scss
        &:hover {
            background: #ffffcc;
            button {
                display: block;
            }
        }
    }
    .none {
        margin-left: 50px;
    }
</style>
