'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
    async getArticleList() {
        return this.ctx.model.Article.find({});
    }
    // 增加用户
    async addArticle(articleObj) {
        console.log(articleObj);
        const article = new this.ctx.model.Article(articleObj);
        return await article.save();
    }

    // 编辑用户
    async editArticleById(aid, articleObj) {
        return await this.ctx.model.Article.updateOne({
            _id: aid,
        }, articleObj);
    }

    // 删除用户
    async removeArticleById(aid) {
        return await this.ctx.model.Article.deleteOne({ _id: aid });
    }

}

module.exports = ArticleService;
