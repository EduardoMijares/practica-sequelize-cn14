module.exports = function (sequelize, dataTypes) {
    
  
    let movies= sequelize.define(
      "movies",
      {   
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncremental: true,
      },
      title: {
        type: dataTypes.STRING,
      },
      awards: {
        type: dataTypes.INTEGER,
      },
      length: {
        type: dataTypes.INTEGER,
      },
      release_date: {
        type: dataTypes.DATE,
      },
      genre_id: {
        type: dataTypes.INTEGER,
      },
    },
    
    {     
      tableName: "movies",
      timestamps: false,
      }
    )
  return movies;
}

