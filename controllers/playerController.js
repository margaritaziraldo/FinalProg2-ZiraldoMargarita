const db = require('../database/models');

module.exports = {
    detalle: function (req,res) {
        let jugadorBuscado= req.params.id;
      
        let asociacion = {
          include:[
            { association: "equipo" }
          ]
        }
        db.Player.findByPk(jugadorBuscado, asociacion)
        .then((result) => {
          return res.render('onePlayer', {jugador: result, title: jugadorBuscado})
        })
        .catch((err) => {
          return console.log(err);
        });


    },
    create: function (req,res) {
        return res.render("newPlayer", {title: "Registro Jugador"})
    },

    nuevoJugador: function (req,res) {
      let jugadorNuevo = req.body;
    //  return res.send(jugadorNuevo)
      db.player.create(jugadorNuevo)
      .then(function(results) {
        return res.redirect("/");
      }).catch((err) => {
         res.send('Hubo error')
       });


  }
}