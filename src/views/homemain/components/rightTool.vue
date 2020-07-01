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
      ],
      opinionSonData: [
        { value: 40, name: 'a' },
        { value: 50, name: 'b' },
        { value: 10, name: 'c' },
        { value: 20, name: 'd' },
        { value: 30, name: 'e' },
        { value: 20, name: 'f' },
        { value: 50, name: 'g' },
        { value: 20, name: 'h' },
        { value: 60, name: 'i' }
      ],
      colorList: ['#51CEC6','#6AE2D9','#96F5EF','#EF87C2','#F79DD0','#FFC8E7','#FFB703','#FFCD50','#FFE296']
    }
  },
  created () {
    // this.$nextTick(() => {
    //   this.initData()
    // })
  },
  mounted () {
    this.$nextTick(() => {
      this.initData()
    })
  },
  methods: {
    initData (id = 'main') {
      this.charts = echarts.init(document.getElementById(id))
      console.log(this.charts)
      this.charts.setOption({
        // 标题
        title: {
        },
        // 提示框
        tooltip: {
          trigger: 'item',
          showDelay: 20, // 显示延迟
          hideDelay: 20, // 隐藏延迟
        },
        // 值域
        series: [
          { // 内圈
            // name: '饼状图', // tooltip 提示框显示内容
            type: 'pie',
            radius: ['20%', '45%'], // 环形饼状图 [内圆半径， 外圆半径]
            center: ['50%', '50%'], // 饼状图
            avoidLabelOverlap: true,
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
            radius: ['50%', '80%'],
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
            data: this.opinionSonData,
            color: this.colorList
          }
        ]
      })
      this.charts.on('click', (params) => {
        console.log(params)
        if (params.seriesIndex == 0) {
          // 内层
          // write click function
        } else if (params.seriesIndex == 1) {
          // 外层
          // write click function
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.right-tool{
  display: inline-block;
  width: 250px;
  height: 250px;
  z-index: 1000;
  // background-color: antiquewhite;
}
.pie-main{
  width: 250px;
  height: 250px;
  // background-color: aquamarine;
}
</style>
