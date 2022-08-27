'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        const { ctx } = this;
        ctx.body = await this.service.article.getArticleList();
        console.log('查询成功');
    }

    async addarticle() {
        // const { ctx } = this
        // let yuf = {
        //     title: 'SSH公钥登录和RSA非对称加密',
        //     intruduce: 'SSH登录方式接触过Linux服务器的同学肯定用过SSH协议登录系统，通常SSH协议都有两种登录方式：密码口令登录和公钥登陆。一、密码口令（类似于账号密码登录） 1.客户端连接服务器，服务器把公钥发给客户端 2.客户端输入登录口令，并用服务器公钥加密后提交给服务器 3.服务器用私钥解密，结果匹配，则允许登录 二、公钥登录（一般用RSA非对称加密） 1...',
        //     author: '夜月归途',
        //     time: '2020 年 05 月 01 日',
        //     comment: '4 条评论'
        // }
        const params = this.ctx.request.body
        // console.log(params);
        this.ctx.body = await this.service.article.addArticle(params.values)
        console.log('添加成功');
    }
    async editarticle() {
        const { ctx } = this;
        let id = '6236f7c4e1aab726588e079d'
        ctx.body = await this.service.article.editArticleById(id, { author: 'yuf' })
        console.log('修改成功');
    }
    async removearticle() {
        const { ctx } = this;
        const params = ctx.request.body
        ctx.body = await this.service.article.removeArticleById(params.id)
        console.log('删除成功');
    }
}

module.exports = ArticleController;
