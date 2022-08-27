/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1647751210116_6858';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //mongoose数据库配置
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/blog',//
    options: { useNewUrlParser: true, useUnifiedTopology: true },//其他配置警告解除方法
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };
  // config.redis = {
  //   client: {
  //     port: 6379,
  //     host: '127.0.0.1',
  //     password: '',
  //     db: 0
  //   },
  // };

  // config.cors = {
  //   origin: ctx => ctx.get('origin'), //这种方式是允许所有的IP+端口跨域访问
  //   credentials: true, // 开启认证
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', //允许请求的方式
  // };

  config.jwt = {
    secret: '123456',	//自定义token的加密条件字符串，可按各自的需求填写
  };


  return {
    ...config,
    ...userConfig,
  };
};
