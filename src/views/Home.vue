<template>
  <div class="home">
    <right-tool></right-tool>
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <i-menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </i-menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '15px 20px', float: 'left'}" type="md-menu" size="24"></Icon>
          <menu-top></menu-top>
        </Header>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff', marginTop: '24px'}">
          <!-- 2D 视图 -->
        </Content>
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
      mouseY: 0,
      isCollapsed: false
    }
  },
  components: {
    'RightTool': () => import('@/views/components/rightTool'),
    'MenuTop': () => import('@/views/components/menuTop')
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted () {
    this.rightMouse()
  },
  methods: {
    collapsedSider () {
      // console.log(this.$refs)
      this.$refs.side1.toggleCollapse()
    },
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
.layout-header-bar{
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
