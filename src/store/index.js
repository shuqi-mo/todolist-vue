import { createStore} from 'vuex'
import { toRaw } from '@vue/reactivity'

const localKey = 'todo-list'
// 状态管理
export default createStore({
  // 列表
  state: {
    list: JSON.parse(localStorage.getItem(localKey)) || []
  },
  getters: {
  },
  // 操作任务列表的方法
  mutations: {
    // 添加任务
    addTodo(state, payload) {
      // {
      //   title: val,
      //   complete: false
      // }
      state.list.push(payload)
      // 可以加个兜底
      const tempList = JSON.parse(localStorage.getItem(localKey)) || []
      tempList.push(payload)
      // console.log(payload)
      // console.log(localStorage.getItem(localKey))
      localStorage.setItem(localKey, JSON.stringify(tempList))
    },
    // 删除任务
    delTodo(state, payload) {
      state.list.splice(payload, 1) // 删除下标为payload的元素
      const tempList = JSON.parse(localStorage.getItem(localKey))
      tempList.splice(payload, 1)
      localStorage.setItem(localKey, JSON.stringify(tempList))
    },
    // 清除已完成
    clearTodo(state, payload) {
      state.list = payload
      const tempList = JSON.parse(JSON.stringify(payload))
      localStorage.setItem(localKey, JSON.stringify(tempList))
    },
    // 更新已完成
    updateDone(state, payload) {
      console.log(payload)
      console.log(payload[0])
      console.log(payload[1])
      console.log(payload[2])
      console.log(payload[3])
      console.log(payload[4])
      console.log(toRaw(payload))
      const tempList = JSON.parse(JSON.stringify(payload))
      // const tempList = toRaw(payload)
      console.log(tempList)
      localStorage.setItem(localKey, JSON.stringify(tempList))
    }
  },
  actions: {
  },
  modules: {
  },
})
