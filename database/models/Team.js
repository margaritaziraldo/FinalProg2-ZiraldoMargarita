module.exports = (sequelize, DataTypes) => {
    
    let alias = 'Team';
    
    let columnas = {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombreClub: {
          type: DataTypes.STRING(100)
        },
    };

    let configuraciones = {
      tableName: 'teams',
      timestamps: false,
    }

    const Team = sequelize.define(alias, columnas, configuraciones);
  
    Team.associate = (models) => {
      Team.hasMany(models.Player, {
        as: 'jugadores',
        foreignKey: 'idEquipo',
      });
    };
  
    return Team;
  };
  