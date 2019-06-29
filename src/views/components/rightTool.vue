<template>
  <div class="right-tool">
    <div id="main" class="pie-main"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      charts: '',
      opinionData:[
        {value:100, name: 'one'},
        {value:100, name: 'two'},
        {value:100, name: 'three'}
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initData('main')
    })
  },
  methods: {
    initData (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        // 提示框
        tooltip: {
          trigger: 'item',
        },
        series: [
          { // 内圈
            // name: '饼状图', // tooltip 提示框显示内容
            type:'pie',
            radius:['20%','45%'], // [内圆半径， 外圆半径]
            avoidLabelOverlap: false,
            animation: false, // 悬浮动画效果
            label: { // 图例设置
              normal: { // 中心是否显示当前数据 默认加载时
                show: true,
                // position: 'center'
                position: 'inner'
              },
              emphasis: { // 基本样式
                show: true, // 中心是否显示当前数据 鼠标悬浮到指定模块时
                textStyle: { // 文本属性
                  fontSize: '30',
                  fontWeight: 'blod'
                }
              }
            },
            /**
             * 如果图例设置 show 为 false，则图例线默认不显示
             */
            labelLine: {
              normal: {
                show: true
              },
              emphasis: {
                show: false
              }
            },
            data:this.opinionData // 数据 目前先放置在data中，后期再优化
          },
          { // 外圈
            type: 'pie',
            radius: ['45%', '75%'],
            animation: true,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: { // 图例线设置
              normal: {
                show: false,
              }
            },
            data:[
              { value: 40, name: '学生（小学）' },
              { value: 50, name: '学生（初中）' },
              { value: 10, name: '学生（高中）' },
              { value: 20, name: '教师（小学）' },
              { value: 30, name: '教师（初中）' },
              { value: 50, name: '教师（高中）' },
              { value: 20, name: '家长（小学）' },
              { value: 20, name: '家长（初中）' },
              { value: 60, name: '家长（高中）' },

            ],
            color:['#51CEC6','#6AE2D9','#96F5EF','#EF87C2','#F79DD0','#FFC8E7','#FFB703','#FFCD50','#FFE296']
          }
        ]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.right-tool{
  display: inline-block;
  position: absolute;
  width: 250px;
  height: 250px;
  // background-color: antiquewhite;
}
.pie-main{
  width: 250px;
  height: 250px;
  // background-color: aquamarine;
}
</style>
