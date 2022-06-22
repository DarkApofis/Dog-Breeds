const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    id: {
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      type: DataTypes.UUID,
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    height: {
        allowNull: false,
        type: DataTypes.STRING
    },
    weight: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lifeSpan: {
        field: 'life_span',
        type: DataTypes.STRING
    },
    createdInDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, 
  {
    timestamps: false,
  });
};
