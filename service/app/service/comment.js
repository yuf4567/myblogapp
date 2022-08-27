'use strict';

const Service = require('egg').Service;

class CommentService extends Service {
    async getCommentList() {
        return this.ctx.model.Comment.find({});
    }
    // 增加用户
    async addComment(commentObj) {
        const comment = new this.ctx.model.Comment(commentObj);
        return await comment.save();
    }

    // 编辑用户
    // async editCommentById(aid, articleObj) {
    //     return await this.ctx.model.Comment.updateOne({
    //         _id: aid,
    //     }, articleObj);
    // }

    // 删除用户
    // async removeCommentById(aid) {
    //     return await this.ctx.model.Comment.deleteOne({ _id: aid });
    // }

}

module.exports = CommentService;
