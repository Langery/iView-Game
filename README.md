# iView-Game

&emsp;想无聊的时候自己写一个游戏，目前是想基于[iView](https://www.iviewui.com/)写一个游戏。

> 框架 vue-3.7.0

1. 启动项目：<br/>  
  a. 下载项目到本地 <br />
  b. npm install <br />
  c. npm run serve <br />
2. 更新为新版本Vue(3.7.0)<br/>
~~3. 介于目前单位在使用 [`D3.js`](https://d3js.org/) 框架，所以目前的动画视图也使用 D3 来实现~~
3. 一开始考虑使用 D3 框架，后来打算使用 [`Three.js`](https://threejs.org/) 框架实现视图渲染
4. 对于右键扩展功能考虑使用 [`Echart.js`](https://echarts.baidu.com/index.html)

> note

&ensp;记录开发过程中存在的问题和一些细节点
1. 主体界面配置文件位置：`public/index.html`；
2. `App.vue` 文件中，`router-link` 为界面路由，`router-view` 为视图展示；
3. 取消鼠标右键默认菜单：
``` javascript
  e.preventDefault()
```
4. 所有的数据通过 map 做循环渲染，后期所有的 map 都存入到数据库中
5. 饼状图相关资料：<br />
  a. [Echarts饼状图属性设置大全](https://blog.csdn.net/sleepwalker_1992/article/details/82532210)<br />
  b. [Echarts 基本设置 设置图表位置](https://www.jianshu.com/p/3cf80b96a65d)<br />
  c. [Echarts饼状图详解及示例](https://blog.csdn.net/qq_21386275/article/details/78842286)<br />
6. iView Table 中显示 dot 的颜色有 success 和 error 两种
7. Modal 中遮罩层和模态框移动不可共存
8. render 事件处理 —— 在 Modal 中
    - 可以添加表格信息的图标等样式操作
    - 可用于添加点击事件，并通过 click 事件进行添加对应操作
    ``` javascript
      {
        render: (h, params) => {
          var params = params
          return h('div', [
            h('div', {
              on: {
                click: () => {
                  ...
                }
              }
            })
          ])
        }
      }
    ```
9. Table 问题
    - 当做 checkbox 操作时可以通过在 data 中定义 checkbox 的 model 中的数据来控制默认显示的内容
> idea

- [ ] 全局动画，需要做到PC端与手机端适配（待定，主要先以PC为主吧）
- [ ] 重新思考数据存储位置和历史数据流的存储
- [ ] 尝试做一下动画界面，后期做一些关于OO的配置
- [x] 主要还是依赖于Vue实现框架的搭建
- [x] 鼠标右键扩展功能
- [x] 鼠标右键可考虑EchartJS来实现
- [ ] 画板区域及功能
- [ ] 亦或通过css3实现相关动态效果
- [ ] 绘制过程将以步骤条的形式进行，并可以随时返回到上一层
- [ ] iview 组件拆分及函数功能指定细化
- [ ] 待续...

> ongoing or aim

- [x] 二维视图使用 canvas 实现，三维视图使用 Three.JS 实现
  - [x] canvas 画板实现问题
  - [x] 当鼠标移出绘图区域数据消失
  - [ ] canvas 功能实现问题 
- [x] 鼠标右键设置为子菜单并做单独处理
  - [x] 双层饼状图已实现
  - [ ] 右键功能划分
  - [ ] 当鼠标浮动到指定一层饼状图才显示对应二层饼状图
  - [ ] 每当触发右键时有加载过程
  - [ ] 未做右键数据预加载
  - [ ] 目前已实现相关静态显示，需考虑相关事件的触发

> finish

- [x] 获取到当前鼠标浏览器位置，并取消默认右键属性
- [x] 鼠标右键出现功能区选择
- [x] 左侧制作一个工具栏，用于操作，同时右侧为详细信息说明

### canvas 笔记

&emsp;&emsp;...待续

### Three.js 使用笔记

1. 安装
``` node
  $ npm install three --save
```
2. 引入
``` javascript
  import * as Three from 'three'
```

### Echart.js 使用笔记

1. 安装
``` node
  npm install echarts --save
```
2. 引入
``` javascript
  import echarts from 'echarts'
```

### optimization

- [ ] Echart 加载速度需优化

### ~~D3.js 使用笔记~~ 已弃用

1. 安装
``` node
  $ npm install d3 --save-dev
```
2. 引入
``` javascript
  import * as d3 from 'd3'
```
