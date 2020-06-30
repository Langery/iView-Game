<template>
  <div class="detail-info">
    <p :style="pStyle">组件信息</p>
      <p :style="pStyle"></p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            Name:
          </Col>
          <Col span="12">
            Account:
          </Col>
        </Row>
        <Row>
          <Col span="12">
            City: BeiJing
          </Col>
          <Col span="12">
            Country: China
          </Col>
        </Row>
        <Row>
          <Col span="12">
            Birthday:
          </Col>
          <Col span="12">
            Website:
          </Col>
        </Row>
        Message:
      </div>
      <Divider />
      <p :style="pStyle">Other information</p>
      <div class="demo-drawer-profile">
        <Row>
          <Col span="12">
            Position:
          </Col>
          <Col span="12">
            Responsibilities:
          </Col>
        </Row>
        <Row>
          <Col span="12">
            Department:
          </Col>
        </Row>
      </div>
      <Divider />
  </div>
</template>

<script>
export default {
  data () {
    return {
      // defined the style
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px'
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
