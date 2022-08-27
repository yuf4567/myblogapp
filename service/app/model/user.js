// app/model/user.js
module.exports = app => {
    // 引入建立连接的mongoose
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 数据库表的映射
    const UserSchema = new Schema({
        name: { type: String },
        password: { type: String }
    });
    return mongoose.model('User', UserSchema, 'user');
}