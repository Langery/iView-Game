<template>
  <div class="home">
    <right-tool></right-tool>
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
  components: {
    'RightTool': () => import('@/views/components/rightTool')
  },
  mounted () {
    this.rightMouse()
  },
  methods: {
    rightMouse () {
      document.oncontextmenu = (e) => {
        var e = event || window.event
        e.preventDefault()
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        console.log(e.clientX, e.clientY)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
