'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const { ctx } = this;
        let yuf = {
            name: 'yuf',
            password: '123456'
        }
        ctx.body = await this.service.user.addUser(yuf)
        console.log('添加成功');
    }
    async login() {
        //
        console.log(this.ctx.request.body);
        const params = this.ctx.request.body
        await this.service.user.login(params)
    }
}

module.exports = UserController;
