module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Player';
    let columnas = {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        apellido: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        foto: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        posicion: {
          type: DataTypes.STRING(50),
        },
        idEquipo: {
          type: DataTypes.INTEGER,
        },
      };

    let configuraciones = {
      tableName: 'players',
      timestamps: false,
    }
    
    const Player = sequelize.define(alias, columnas, configuraciones);
  
    Player.associate = (models) => {
        Player.belongsTo(models.Team, {
          as: 'equipo',
          foreignKey: 'idEquipo',
        });
      };
    
      return Player;
  };
  