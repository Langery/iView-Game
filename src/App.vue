<template>
  <div id="app">
    <!-- 路由 -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <!-- 视图渲染 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
