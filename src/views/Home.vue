<template>
  <div class="home">
    <Layout :style="{height: '100vh'}">
      <Sider breakpoint="md" ref="sideMenus" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
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
    </Layout>
  </div>
</template>

<script>
import Bus from '@/common/Bus'

export default {
  name: 'home',
  data () {
    return {
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
          addr: '/me'
        }
      ]
    }
  },
  computed: {
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  mounted () {
    Bus.$on('sideMenu', sideMenu => {
      this.$refs.sideMenus.toggleCollapse()
    })
  },
  methods: {
    turnUrl (e) {
      console.log(e)
      this.$router.push(e)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
