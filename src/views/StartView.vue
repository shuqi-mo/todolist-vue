<template>
  <div class="start">
    <h3 class="title">To Do List</h3>
    <button @click="start" class="button"><span>Let's start!</span></button>
  </div>
</template>
  
<script>
  import {defineComponent, ref, onMounted, onUnmounted} from 'vue'
  import {useRouter} from 'vue-router'
  
  export default defineComponent({
    // 组件名称
    name:'start',
    setup(props, ctx) {
      let router = useRouter()  // 全局路由对象
      onMounted(() => {
        // 发请求
        // 数据初始化，接受路由传递的参数
      })
      onUnmounted(() => {
        // 组件卸载
        // 清除定时器 清除闭包函数
      })
      let start = () => {
        router.push('/home')
      }
      return {
        start
      }
    }
  })
</script>
  
<style scoped lang="scss">
  .start {
    display: grid;
    place-items: center;
  }
  .title {
    font-size: 50px;
    color: #FFFFFF;
    margin-top: 100px;
  }

  .button {
    background-color:#003366;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 25px;
    margin-top: 50px;
    border-radius: 8px;
    transition: all 0.5s;
    cursor: pointer;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .button:hover span {
    padding-right: 25px;
  }

  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
</style>
  