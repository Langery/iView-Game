<template>
  <div class="draw-board">
    <div id="container"></div>
  </div>
</template>

<script>
import * as Three from 'three'

export default {
  data () {
    return {}
  },
  mounted () {
    this.init('container')
  },
  methods: {
    init (id) {
      let aim = document.getElementById(id)
      
    },
    animate () {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
