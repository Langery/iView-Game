<template>
  <i-menu mode="horizontal" theme="light" active-name="1">
    <div class="layout-nav">
      <MenuItem
        v-for="(item, index) in menuMap"
        :key="index"
        :name=item.name
        >
        <Icon :type=item.type></Icon>
        <span>{{item.way}}</span>
      </MenuItem>
    </div>
  </i-menu>
</template>

<script>
export default {
  data () {
    return {
      menuMap: [
        {
          name: '1',
          type: 'ios-navigate',
          way: 'Item1'
        }, 
        {
          name: '2',
          type: 'ios-keypad',
          way: 'Item2'
        },
        {
          name: '3',
          type: 'ios-analytics',
          way: 'Item3'
        }, 
        {
          name: '4',
          type: 'ios-paper',
          way: 'Item4'
        }
      ]
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style>
.ivu-menu-horizontal{
  float: right;
  width: 40%;
}
</style>

<style lang="less" scoped>
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
