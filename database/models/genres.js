module.exports = function (sequelize, dataTypes) {
    
    let genres= sequelize.define(
    "genres",  
     {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncremental: true,
      },
      name: {
        type: dataTypes.STRING,
      },
      ranking: {
        type: dataTypes.INTEGER,
      },
      active: {
        type: dataTypes.BOOLEAN,
      },
    },
    {     
        tableName: "genres",
        timestamps: false,
        }
      )
    return genres;
  }