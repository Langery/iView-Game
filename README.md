# iView-Game

&emsp;想无聊的时候自己写一个游戏，目前是想基于[iView](https://www.iviewui.com/)写一个游戏。

> 框架 vue-3.7.0

1. 启动：npm run serve
2. 更新为新版本Vue(3.7.0)
~~3. 介于目前单位在使用 [`D3.js`](https://d3js.org/) 框架，所以目前的动画视图也使用 D3 来实现~~
3. 一开始考虑使用 D3 框架，后来打算使用 [`Three.js`](https://threejs.org/) 框架实现视图渲染

> note

&ensp;记录开发过程中存在的问题和一些细节点
1. 主体界面配置文件位置：`public/index.html`；
2. `App.vue`文件中，`router-link`为界面路由，`router-view`为视图展示；
3. 取消鼠标右键默认菜单：
``` javascript
  e.preventDefault()
```
4. 所有的数据通过 map 做循环渲染，后期所有的 map 都存入到数据库中

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

> Three.js 使用笔记

1. 安装
``` node
  $ npm install three --save
```

> D3.js 使用笔记

1. 安装
``` node
  $ npm install d3 --save-dev
```
2. 引入
``` javascript
  import * as d3 from 'd3'
```
