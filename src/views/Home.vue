<template>
  <div class="home">
    <Layout :style="{height: '100vh'}">
      <Sider breakpoint="md" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <i-menu active-name="/" @on-select="turnUrl" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem
            v-for="(item, index) in leftMap"
            :key="index"
            :name="item.name"
            :to="item.addr"
          >
          <router-link :to="item.addr">
            <Icon :type="item.type"></Icon>
            <span>{{item.span}}</span>
          </router-link>
          </MenuItem>
        </i-menu>
      </Sider>
      <!-- <router-link to="/"></router-link>
      <router-link to="/drawlib"></router-link> -->
      <router-view></router-view>
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
          name: '/',
          type: 'ios-navigate',
          span: '画板',
          addr: '/'
        },
        {
          name: 'drawlib',
          type: 'ios-search',
          span: '图库',
          addr: '/drawlib'
        },
        {
          name: 'me',
          type: 'ios-settings',
          span: '我的',
          addt: '/me'
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
    turnUrl (e) {
      console.log(e)
      this.$router.push(e)
    },
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
