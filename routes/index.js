var express = require('express');
var router = express.Router();
const db = require('../database/models');
const { Op } = require("sequelize");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DH Movies' });
});

router.get('/movies', function (req, res) {
  // devolver todas las peliculas
  db.movies.findAll()
  .then(movies=> {
    console.log(movies);
    res.render('movies/index', {movies: movies});
  })
  .catch(error => {
    res.render('error', {error : error});
  })  

  //res.render('movies/index', {
    //movies : []
  //})
});

router.get('/movies/details/:id', function (req, res) {
  db.movies.findByPk(req.params.id)
  .then(movie => {
    res.render('movies/show', {movie : movie})
  })
  .catch(error => {
    res.render('error', {error: error});
  }) 
})

router.get('/movies/new', function (req, res) {
  db.movies.findAll({
    order:[['release_date', 'DESC']],
    limit: 5
  })
  .then(movies =>{
    res.render('movies/index', {
      genres: [],
      movies: movies,    
    });
  })
  .catch(error => {
    res.render('error', {error: error});
  })    
})

router.get('/movies/recommended', function (req, res) {

  db.movies.findAll({
    order:[['rating', 'DESC']],
    limit: 5
  })
  .then(movies =>{
    res.render('movies/index', {
      genres: [],
      movies: movies,    
    });
  })
  .catch(error => {
    res.render('error', {error: error});
  })    
})
  


router.get('/movies/:id', function (req, res) {
  // devolver solo la pelicula especificada por el id

  db.movies.findByPk(req.params.id)
  .then(movie => {
    res.render('movies/show', {movie : movie})
  })
  .catch(error => {
    res.render('error', {error: error});
  }) 
})

router.post('/movies/search', function (req, res) {
 
  db.movies.findAll({
    where: {
      title: { [db.Sequelize.Op.like]: "%" + req.body.search + "%",
      },
  },
  order: [["title", req.body.order]],
})
  .then(movie => {
    res.render('movies/search', {movie : movie})
  })
  .catch(error => {
    res.render('error', {error: error});
  })
})


router.get('/movies/:id/edit', function (req, res) {
  res.render('movies/edit', {
    genres : [],
    movie : movie,
  })
})

router.patch('/movies/:id', function (req, res) {
  res.redirect('/movies')
})

router.delete('/movies/:id', function (req, res) {
  db.movies.destroy({
    where: {
      id: req.params.id
    }
})
})
module.exports = router;