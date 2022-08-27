// app/model/user.js
module.exports = app => {
    // 引入建立连接的mongoose
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 数据库表的映射
    const TagSchema = new Schema({
        name: { type: String },
        color: { type: String }
    });
    return mongoose.model('Tag', TagSchema, 'tag');
}