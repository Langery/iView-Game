const path = require('path');

const config = {
  entry: {
    main: './main.js', // 指定入口文件
  },
  output: {
    path: path.join(__dirname, './dist'), // 指定输出目录
    publicPath: '/dist/',
    filename: 'main.js', // 输出文件
  },

};

module.exports = config;
