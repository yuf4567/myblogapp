// app/model/user.js
module.exports = app => {
    // 引入建立连接的mongoose
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 数据库表的映射
    const CommentSchema = new Schema({
        logo: { type: String },
        name: { type: String },
        descri: { type: String }
    });
    return mongoose.model('Comment', CommentSchema, 'comment');
}