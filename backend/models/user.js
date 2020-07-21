/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    auth_base: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    auth_buffer: {
      type: 'LONGBLOB',
      allowNull: false
    }
  }, {
    timestamps:false,
    sequelize,
    tableName: 'user'
  });
};
