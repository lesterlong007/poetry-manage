/**
 * @Author lester
 * @Date 2021-04-18
 */

const { override, addLessLoader, addWebpackAlias, fixBabelImports } = require('customize-cra');
const path = require("path");

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
      modifyVars: {
        "@primary-color": "#1890ff",
      }
    },

  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
