<template>
  <div class="home">
    <right-tool></right-tool>
    <Layout>
      <Header>
        <menu-top></menu-top>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <i-menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                Item 1
              </template>
              <MenuItem name="1-1">Option 1</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                Item 2
              </template>
              <MenuItem name="2-1">Option 1</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Item 3
              </template>
              <MenuItem name="3-1">Option 1</MenuItem>
            </Submenu>
          </i-menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff', marginTop: '24px'}">
          <!-- 2D 视图 -->
          </Content>
        </Layout>
      </Layout>
    </Layout>
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
    'RightTool': () => import('@/views/components/rightTool'),
    'MenuTop': () => import('@/views/components/menu')
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
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
</style>
