var express = require('express');
var router = express.Router();
const playerController = require('../controllers/playerController')


router.get('/id/:id', playerController.detalle);
router.get('/create', playerController.create);
router.post('/create', playerController.create);
router.post('/create', playerController.nuevoJugador);


module.exports = router;
