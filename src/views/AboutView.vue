<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="back">回到首页</button>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  // 组件名称
  name:'about',
  setup(props, ctx) {
    let router = useRouter()  // 全局路由对象
    let back = () => {
      router.back() // 或者可以用router.go(-1)
    }
    return {
      back
    }
  }
})
</script>

<style scoped lang='scss'>

</style>
