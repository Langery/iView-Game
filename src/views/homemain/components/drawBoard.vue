<template>
  <div class="draw-board">
    <canvas id="canvas" width="500" height="400"></canvas>
  </div>
</template>

<script>
import Bus from '@/common/Bus'

export default {
  data () {
    return {
      mouseX: 0,
      mouseY: 0,
      drawArr: [],
      drawIndex: 0
    }
  },
  mounted () {
    window.onload = () => {
      this.init('canvas')
      this.moseMove('canvas')
    }
    Bus.$on('reset', reset => {
      let [canObj, canCon] = this.getCanvas('canvas')
      canObj.height=canObj.height
      this.drawArr = []
      this.drawIndex = 0
    })
  },
  methods: {
    getCanvas (id) {
      let obj = document.getElementById(id)
      // 检测浏览器是否支持 canvas
      if (!obj.getContext('2d')) {
        this.$Message.warning('当前浏览器暂不支持绘图~')
        return
      } else {
        var context = obj.getContext('2d') // 2d 视图
        // console.log(context)
        return [obj, context]
      }
    },
    init (id) {
      const self = this
      let [obj, context] = self.getCanvas(id)

      console.log(typeof canvasX)
      obj.onclick = (e) => {
        var bbox = obj.getBoundingClientRect()
        var x = e.clientX - bbox.left * (obj.width/bbox.width)
        var y = e.clientY - bbox.left * (obj.height/bbox.height) + 160
        self.drawIndex++

        var sendObj = {
          canvasX: x,
          canvasY: y
        }
        self.drawArr.push(sendObj)
        // console.log(self.drawArr)
        if (self.drawArr.length>1 && self.drawArr.length<=2) {
          context.moveTo(self.drawArr[1].canvasX, self.drawArr[1].canvasY)
          context.lineTo(self.drawArr[0].canvasX, self.drawArr[0].canvasY)
          context.stroke()
        } else if (self.drawArr.length>2) {
          context.moveTo(self.drawArr[self.drawIndex - 1].canvasX, self.drawArr[self.drawIndex - 1].canvasY)
          context.lineTo(self.drawArr[self.drawIndex - 2].canvasX, self.drawArr[self.drawIndex - 2].canvasY)
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
.draw-board{
  border: 1px solid;
  overflow: hidden;
}
</style>
