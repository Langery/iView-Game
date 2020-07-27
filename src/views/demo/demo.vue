<template>
  <div class="demo">
    <Tree :render="renderContent" :data="treeData"></Tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      treeData: [
        {
          title: 'parent 1',
          expand: false,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    renderContent (h, { root, node, data }) {
      return h('span', {

      }, data.title)
    }
  }
}
</script>

<style scoped>
</style>
