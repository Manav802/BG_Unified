/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iaas_custom', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    license: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps:false,
    sequelize,
    tableName: 'iaas_custom'
  });
};
