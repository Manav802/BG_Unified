/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iass_basic', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    plan: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    license: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    timestamps:false,
    sequelize,
    tableName: 'iass_basic'
  });
};
