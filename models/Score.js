const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Score model
class Score extends Model {}

// create fields/columns for Score model
Score.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    score_amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'score'
}
);

module.exports = Score;