'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
    //查询所有评论
    async index() {
        const { ctx } = this;
        ctx.body = await this.service.tag.getTagList();
        console.log('查询成功');
    }
}

module.exports = TagController;