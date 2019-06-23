# iView-Game

&emsp;想无聊的时候自己写一个游戏，目前是想基于[iView](https://www.iviewui.com/)写一个游戏。

> 框架 vue-3.7.0

1. 启动：npm run serve
2. 更新为新版本Vue(3.7.0)

> note

&ensp;记录开发过程中存在的问题和一些细节点
1. 主体界面配置文件位置：`public/index.html`；
2. `App.vue`文件中，`router-link`为界面路由，`router-view`为视图展示；
3. 取消鼠标右键默认菜单：
``` javascript
  e.preventDefault()
```

> idea

- [ ] 全局动画，需要做到PC端与手机端适配（待定，主要先以PC为主吧）
- [ ] 重新思考数据存储位置和历史数据流的存储
- [ ] 尝试做一下动画界面，后期做一些关于OO的配置
- [x] 主要还是依赖于Vue实现框架的搭建
- [ ] 鼠标右键扩展功能
- [ ] 亦或通过css3实现相关动态效果
- [ ] 待续...

> ongoing

- 鼠标右键设置为子菜单做单独处理

> finish

- [x] 获取到当前鼠标浏览器位置，并取消默认右键属性