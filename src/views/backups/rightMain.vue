<template>
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
</template>