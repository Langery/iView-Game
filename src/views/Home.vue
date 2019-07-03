<template>
  <div class="home">
    <Layout :style="{height: '90vh'}">
      <Sider breakpoint="md" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <i-menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem
            v-for="(item, index) in leftMap"
            :key="index"
            :name="item.name"
          >
            <Icon :type="item.type"></Icon>
            <span>{{item.span}}</span>
          </MenuItem>
        </i-menu>
      </Sider>
      <Layout style="position: relative">
        <Header breakpoint :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '15px 20px', float: 'left'}" type="md-menu" size="24"></Icon>
          <menu-top></menu-top>
        </Header>
        <!-- 参数区 -->
        <div class="drawer">
          <Button icon="ios-list-box" @click="drawerVal = true" size="small" title="工具栏"></Button>
        </div>
        <div class="detail-info">
          <Button icon="ios-list-box-outline" @click="inforVal = true" size="small" title="详细信息"></Button>
        </div>
        <Drawer title="工具栏" placement="left" :closable="false" v-model="drawerVal" width="300">
          <drawer-tool></drawer-tool>
        </Drawer>
        <Drawer title="详细信息" :closable="false" width="640" v-model="inforVal">
          <detail-info></detail-info>
        </Drawer>
        <paramet-data></paramet-data>
        <Content :style="{margin: '0 4% 24px', padding: '24px', minHeight: '280px', background: '#fff', position: 'relative'}">
          <!-- 鼠标右键功能区 -->
          <right-tool
            :style="rightStyle"
            v-show="isRight"
          >
          </right-tool>
          <!-- 2D 视图 -->
          <draw-board1
            :style="{position: 'absolute', top: '0', left: '0'}"
          >
          </draw-board1>
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
      inforVal: false,
      drawerVal: false,
      rightStyle: {
        position: 'absolute',
        top: '0px',
        left: '0px'
      },
      isRight: false,
      mouseX: 0,
      mouseY: 0,
      isCollapsed: false,
      leftMap: [
        {
          name: '1-1',
          type: 'ios-navigate',
          span: '画板'
        },
        {
          name: '1-2',
          type: 'ios-search',
          span: '图库'
        },
        {
          name: '1-3',
          type: 'ios-settings',
          span: '我的'
        }
      ]
    }
  },
  components: {
    'RightTool': () => import('@/views/components/rightTool'),
    'MenuTop': () => import('@/views/components/menuTop'),
    'ParametData': () => import('@/views/components/parametData'),
    'DrawerTool': () => import('@/views/components/drawerTool'),
    'DrawBoard1': () => import('@/views/components/drawBoard1'),
    'DetailInfo': () => import('@/views/components/detailInfo')
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
      this.$refs.side1.toggleCollapse()
    },
    rightMouse () {
      document.oncontextmenu = (e) => {
        var e = event || window.event
        e.preventDefault()
        this.mouseX = e.clientX
        this.mouseY = e.clientY
        // console.log(e.clientX, e.clientY)
        // 需要同时修改 rightTool.vue 中的位置
        // 同时减去部分 canvas 的位置距离
        this.rightStyle.left = (e.clientX - 125 - 250) + 'px'
        this.rightStyle.top = (e.clientY - 125 - 170) + 'px'
        this.isRight = true
      }
      document.onclick = (e) => { this.isRight = false }
    }
  }
}
</script>

<style lang="less" scoped>
.drawer{
  display: inline-block;
  position: absolute;
  top: 68px;
  left: 16px;
}
.detail-info{
  display: inline-block;
  position: absolute;
  top: 96px;
  left: 16px;
}
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
