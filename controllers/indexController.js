const db = require('../database/models');

module.exports = {
    home: function (req,res) {
        //Obtené todos los jugadores y envía la información a la vista. 
        //El nombre de la variable que debe recibir la vista es "jugadores".
        db.Player.findAll()
        .then((result) => {
          return res.render('home', {jugadores: result, title: "Jugadores"})
        })
        .catch((err) => {
          return console.log(err);
        });
            
        }

    //    return res.render('home', {jugadores: [], title: "Jugadores"})
    }
