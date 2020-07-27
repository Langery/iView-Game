<template>
  <div class="demo">
    <Tree ref="tree" :render="renderContent" :data="treeData"></Tree>
  </div>
</template>

<script>
export default {
  data () {
    return {
      treeData: [
        {
          accountCode: "1001",
          children: [
            {
              accountCode: "1002",
              children: [
                {
                  accountCode: "1003",
                  children: [ ],
                  ifclick: false,
                  id: "91520198MAHT",
                  list: [ ],
                  name: "后台开发部——测试账簿1003",
                  other: "",
                  parenName: "",
                  parentId: "91520198MA2",
                  title: "后台开发部——测试账簿1003"
                },
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: false,
                  id: "91520198MAKF",
                  list: [ ],
                  name: "开发1部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MA2",
                  title: "开发1部"
                },
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: true,
                  id: "91520198MAKF2",
                  list: [ ],
                  name: "开发2部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MA2",
                  title: "开发2部"
                }
              ],
              ifclick: false,
              id: "91520198MA2",
              list: [ ],
              name: "开发部——测试名称1002",
              other: "",
              parenName: "",
              parentId: "91520198MA",
              title: "开发部——测试名称1002"
            },
            {
              accountCode: "",
              children: [
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: true,
                  id: "91520198MARS1",
                  list: [ ],
                  name: "人事1部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MARS",
                  title: "人事1部"
                }
              ],
              ifclick: false,
              id: "91520198MARS",
              list: [ ],
              name: "人事部",
              other: "",
              parenName: "",
              parentId: "91520198MA",
              title: "人事部"
            },
            {
              accountCode: "",
              children: [ ],
              ifclick: true,
              id: "91520198MASY",
              list: [ ],
              name: "事业部",
              other: "",
              parenName: "",
              parentId: "91520198MA",
              title: "事业部"
            },
            {
              accountCode: "",
              children: [
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: true,
                  id: "91520198MAXM1",
                  list: [ ],
                  name: "项目子部1部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MAXM",
                  title: "项目子部1部"
                }
              ],
              id: "91520198MAXM",
              list: [ ],
              name: "项目部",
              other: "",
              parenName: "",
              parentId: "91520198MA",
              title: "项目部"
            }
          ],
          ifclick: false,
          id: "91520198MA",
          list: [ ],
          name: "太平洋公司——测试账簿1001",
          other: "",
          parenName: "",
          parentId: "0",
          title: "太平洋公司——测试账簿1001"
        },
        {
          accountCode: "2001",
          children: [
            {
              accountCode: "",
              children: [
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: true,
                  id: "91520198MADXYSC1",
                  list: [ ],
                  name: "测试部子部1部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MADXYSC",
                  title: "测试部子部1部"
                },
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: true,
                  id: "91520198MADXYSC2",
                  list: [ ],
                  name: "测试部2部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MADXYSC",
                  title: "测试部2部"
                }
              ],
              ifclick: true,
              id: "91520198MADXYSC",
              list: [ ],
              name: "测试部",
              other: "",
              parenName: "",
              parentId: "91520198MADXY",
              title: "测试部"
            },
            {
              accountCode: "",
              children: [
                {
                  accountCode: "",
                  children: [ ],
                  ifclick: false,
                  id: "91520198MADXYSY1",
                  list: [ ],
                  name: "事业部1 子部",
                  other: "",
                  parenName: "",
                  parentId: "91520198MADXYSY",
                  title: "事业部1 子部"
                }
              ],
              ifclick: true,
              id: "91520198MADXYSY",
              list: [ ],
              name: "事业部1",
              other: "",
              parenName: "",
              parentId: "91520198MADXY",
              title: "事业部1"
            },
            {
              accountCode: "",
              children: [ ],
              ifclick: true,
              id: "91520198MADXYXM",
              list: [ ],
              name: "项目部",
              other: "",
              parenName: "",
              parentId: "91520198MADXY",
              title: "项目部"
            }
          ],
          ifclick: true,
          id: "91520198MADXY",
          list: [ ],
          name: "大西洋公司——测试账簿2001",
          other: "",
          parenName: "",
          parentId: "0",
          title: "大西洋公司——测试账簿2001"
        }
      ]
    }
  },
  methods: {
    renderContent (h, { root, node, data }) {
      return h('span', {
        class: ['ivu-tree-title'],
        on: {
          click: (e) => {
            let selected = this.$refs.tree.$el.querySelectorAll('.ivu-tree-title-selected')
            for (let i = 0; i < selected.length; i++) {
              if (data.ifclick) selected[i].className = "ivu-tree-title"
            }
            if (data.ifclick) e.path[0].className = "ivu-tree-title  ivu-tree-title-selected"
          }
        }
      }, data.title)
    }
  }
}
// </script>

<style scoped>
</style>
