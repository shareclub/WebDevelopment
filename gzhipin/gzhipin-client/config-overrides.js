//config-overrides.js文件的作用：配合react-app-rewired包，来实现自定义webpack配置

 const { override, fixBabelImports } = require('customize-cra');

 module.exports = function override(config, env) {
   // do stuff with the webpack config...
   return config;
 };
 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
    libraryDirectory: 'es',
     style: 'css',
   }),
 );
  