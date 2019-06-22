<template>
  <div class="home">

  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted () {
    document.oncontextmenu = (e) => {
      var e = event || window.event
      e.preventDefault()
      this.mouseX = e.clientX
      this.mouseY = e.clientY
      console.log(e.clientX, e.clientY)
      // console.log('鼠标右键点击~')
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
