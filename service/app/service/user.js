'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login(params) {
        const namecorrect = await this.ctx.model.User.findOne({
            name: params.name
        })
        const passwordcorrect = await this.ctx.model.User.findOne({
            password: params.password
        })

        if (namecorrect) {
            if (passwordcorrect) {
                // 用户存在,生成token
                const token = this.app.jwt.sign({
                    name: params.name,
                }, this.app.config.jwt.secret);
                this.ctx.body = '登录成功'
                // this.ctx.body = {
                //     code: 200,
                //     message: '登录成功',
                //     token
                // }
            }
            else {
                this.ctx.body = '密码错误'
            }
        } else {
            this.ctx.body = '用户名错误'
        }
    }
    // 增加用户
    async addUser(userObj) {
        const user = new this.ctx.model.User(userObj);
        return await user.save();
    }


}

module.exports = UserService;
