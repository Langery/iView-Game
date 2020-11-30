// use: import config from '/config/index'

export default {
  menuMap: [
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
  ],
  topMenuMap: [
    {
      name: '1',
      type: 'ios-navigate',
      way: 'Item1'
    }, 
    {
      name: '2',
      type: 'ios-keypad',
      way: 'Item2'
    },
    {
      name: '3',
      type: 'ios-analytics',
      way: 'Item3'
    }, 
    {
      name: '4',
      type: 'ios-paper',
      way: 'Item4'
    }
  ]
}