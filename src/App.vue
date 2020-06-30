<template>
  <div id="app">
    <!-- 视图渲染 -->
    <Home></Home>
    <keep-alive>
      <router-view id="contentMain"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Bus from '@/common/Bus'

export default {
  components: {
    'Home': () => import('@/views/Home.vue')
  },
  mounted () {
    Bus.$on('sideMenu', sideMenu => {
      var contentMain = document.getElementById('contentMain')
      if (sideMenu) {
        contentMain.style.cssText = "width: calc(100% - 78px)"
      } else {
        contentMain.style.cssText = "width: calc(100% - 200px)"
      }
    })
  },
  methods: {
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  #contentMain{
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 200px);
    height: 100%;
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    font-size: 16px;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
