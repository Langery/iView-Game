// 配置eslint
module.exports = {
  root: true,

  env: {
    // node: true,
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    'standard'
  ],

  rules: {
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁用不必要的转义字符
    "no-useless-escape": 0
  },

  parserOptions: {
    parser: 'babel-eslint',
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: 'module'
  },

  // required to lint *.vue files
  plugins: [
    'vue'
  ]

}
