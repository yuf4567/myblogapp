'use strict';

const Service = require('egg').Service;

class TagService extends Service {
    async getTagList() {
        return this.ctx.model.Tag.find({});
    }
    // 增加用户
    async addTag(commentObj) {
        const tag = new this.ctx.model.Tag(tagObj);
        return await tag.save();
    }
}

module.exports = TagService;
