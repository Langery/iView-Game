<template>
  <div class="paramet-data">
    <!-- 参数区域 -->
    <div class="input-box">
      x: <Input size="small" v-model="valueX" placeholder="Enter something..." style="width: 50px" :readonly=true />
    </div>
    <div class="input-box">
      y: <Input size="small" v-model="valueY" placeholder="Enter something..." style="width: 50px" :readonly=true />
    </div>
    <div class="input-box">
      <Button title="重置" size="small" icon="ios-refresh" @click="resetFun">Reset</Button>
    </div>
  </div>
</template>

<script>
import Bus from '@/common/Bus'

export default {
  data () {
    return {
      valueX: '0',
      valueY: '0'
    }
  },
  mounted () {
    Bus.$on('mouseMove', (x, y) => {
      // console.log(x, y)
      this.valueX = x
      this.valueY = y
    })
  },
  methods: {
    resetFun () {
      const reset = true
      Bus.$emit('reset', reset)
    }
  }
}
</script>

<style lang="less" scoped>
.paramet-data{
  display: block;
  padding: 5px;
  margin: 0 4%;
}
.input-box{
  float: left;
  margin-left: 10px;
}
</style>
