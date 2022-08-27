'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
    //查询所有评论
    async index() {
        const { ctx } = this;
        ctx.body = await this.service.comment.getCommentList();
        console.log('查询成功');
    }

    //增加评论
    async addcomment() {
        const { ctx } = this;
        let c = {
            logo: "https://q2.qlogo.cn/g?b=qq&nk=2713315169&s=100",
            name: "joe",
            descri: "2022.2.24"
        }
        ctx.body = await this.service.comment.addComment(c)
        console.log('添加成功');
    }
}

module.exports = CommentController;