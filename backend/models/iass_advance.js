/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iass_advance', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    timestamps:false,
    sequelize,
    tableName: 'iass_advance'
  });
};
