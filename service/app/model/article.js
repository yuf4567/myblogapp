// app/model/article.js
module.exports = app => {
    // 引入建立连接的mongoose
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 数据库表的映射
    const ArticleSchema = new Schema({
        title: {
            type: String,
            default: ' '
        },
        intruduce: {
            type: String,
            default: ' '
        },
        author: {
            type: String,
            default: ' '
        },
        time: {
            type: String,
            default: ' '
        },
        comment: {
            type: String,
            default: ' '
        },
        content: {
            type: String,
            default: ' '
        },
        category_name: {
            type: String,
            default: ' '
        },
        tag_name: {
            type: Object,
            default: ' '
        },
        isHot: {
            type: Boolean,
            default: false
        },
        isRandom: {
            type: Boolean,
            default: false
        },
        logo: {
            type: String,
            default: ' '
        },
    });
    return mongoose.model('Article', ArticleSchema, 'article');
}