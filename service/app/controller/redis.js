'use strict';


const Controller = require('egg').Controller;

class RedisController extends Controller {
    async index() {
        const { ctx } = this;
        await this.app.redis.set('userInfo', '张三');
        let userInfo = await this.app.redis.get('userInfo');
        ctx.body = userInfo
        console.log(userInfo);

    }
    async redis_nginx_log() {
        const { ctx } = this;
        var res = await this.app.redis.lrange('filebeat', 0, -1);
        // let userInfo = await this.app.redis.get('userInfo');
        var arr = []
        for (let item of res) {
            arr.push(JSON.parse(item))
        }
        ctx.body = arr
        // console.log(res);

    }

}

module.exports = RedisController;
