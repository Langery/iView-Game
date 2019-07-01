<template>
  <div class="draw-board1">
    <canvas id="canvas" width="500" height="400"></canvas>
  </div>
</template>

<script>
import Bus from '@/common/Bus'

export default {
  data () {
    return {
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted () {
    window.onload = () => {
      this.init('canvas')
      this.moseMove('canvas')
    }
  },
  methods: {
    init (id) {
      let obj = document.getElementById(id)
      // 检测浏览器是否支持 canvas
      if (!obj.getContext('2d')) {
        this.$Message.warning('当前浏览器暂不支持绘图~')
        return
      } else {
        var context = canvas.getContext('2d') // 2d 视图
        // console.log(context)
      }
      var arr=[]
      var canvasX
      var canvasY
      var index = 0
      obj.onclick = (e) => {
        var bbox = obj.getBoundingClientRect()
        var x = e.clientX - bbox.left * (obj.width/bbox.width)
        var y = e.clientY - bbox.left * (obj.height/bbox.height) + 70
        index++


        arr.push({
          canvasX:x,
          canvasY:y
        })
        // console.log(arr)
        if(arr.length>1 && arr.length<=2){
          context.moveTo(arr[1].canvasX,arr[1].canvasY)
          context.lineTo(arr[0].canvasX,arr[0].canvasY)
          context.stroke()
        }else if(arr.length>2){
          context.moveTo(arr[index-1].canvasX,arr[index-1].canvasY)
          context.lineTo(arr[index-2].canvasX,arr[index-2].canvasY)
          context.stroke()
        }
      }
    },
    moseMove (id) {
      var mouse = document.getElementById(id)
      mouse.onmousemove = (e) => {
        var e = event || mouse.event
        e.preventDefault()
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        Bus.$emit('mouseMove', this.mouseX, this.mouseY)
      }
      mouse.onmouseout = (e) => {
        Bus.$emit('mouseMove', 0, 0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.draw-board1{
  border: 1px solid;
  overflow: hidden;
}
</style>
