const User = require('./User');

const Score = require('./Score');
const Comment = require('./Comment');

// Create Associations
User.hasMany(Score, {
    foreignKey: 'user_id'
});
Score.hasMany(Comment, {
    foreignKey: 'score_id'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Comment.belongsTo(Score, {
    foreignKey: 'score_id',
    onDelete: 'SET NULL'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Score.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});






module.exports = { User, Score, Comment };

