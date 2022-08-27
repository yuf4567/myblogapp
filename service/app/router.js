'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/user', controller.user.index);
  // router.get('/adduser', controller.user.adduser);
  // router.get('/edituser', controller.user.edituser);
  // router.get('/removeuser', controller.user.removeuser);

  //查询文章
  router.get('/article', controller.article.index);
  router.post('/addarticle', controller.article.addarticle);
  router.post('/editarticle', controller.article.editarticle);
  router.post('/removearticle', controller.article.removearticle);
  //登录接口
  router.post('/login', controller.user.login);  //登录并生成Token
  router.post('/adduser', controller.user.index);	//需要验证Token的路由

  //评论接口
  router.get('/comment', controller.comment.index);
  router.get('/addcomment', controller.comment.addcomment);

  //标签接口
  router.get('/tag', controller.tag.index);

  router.get('/redis', controller.redis.index);
  router.get('/redis_nginx', controller.redis.redis_nginx_log);




};
