<template>
  <div class="body">
    <h3 class="title">To Do List</h3>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del" @update="update"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
  </div>
  <!-- <button @click="goto">跳转路由</button> -->
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

import {defineComponent, computed, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export default defineComponent({
  // 组件名称
  name:'home',
  // 接受父组件数据
  props: {
  },
  // 定义子组件
  components: {
    NavHeader,
    NavMain,
    NavFooter
  },
  setup(props, ctx) {
    let store = useStore()
    // 通过useStore和计算属性拿到状态管理中定义的任务清单
    let list = computed(() => {
      return store.state.list
      // return localStorage.list
    })
    let router = useRouter()  // 全局路由对象
    let goto = () => {
      router.push('/about') // 在push中传入跳转路径
    }
    let value = ref('')
    // 添加任务
    let add = (val) => {
      value.value = val
      let flag = true
      list.value.map(item => {
        if (item.title == value.value) {
          flag = false
          alert('任务已存在')
        }
      })
      if (flag) {
        store.commit('addTodo', {
          title: val,
          complete: false
        })
      }
    }
    // 删除任务
    let del = (val) => {
      store.commit('delTodo', val)
    }
    // 清除已完成
    let clear = (val) => {
      store.commit('clearTodo', val)
    }
    // 更新完成清单
    let update = (val) => {
      store.commit('updateDone', val)
    }
    return {
      list,
      goto,
      add,
      del,
      clear,
      update
    }
  }
})
</script>

<style scoped lang='scss'>
.body {
    // display: grid;
    // place-items: center;
    width: 500px;
    height: 100%;
    background-color: #ffffff;
    margin: 0 auto;
    margin-top: 50px;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.title {
    font-size: 50px;
    color: #003366;
    text-align: center;
    padding-top: 50px;
}
</style>
