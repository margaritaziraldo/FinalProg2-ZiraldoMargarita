const db = require('../database/models');

module.exports = {
    login: function (req,res) {
      return res.render('login', {title: "Login"})
        
    },
    registro: function (req,res) {
        return res.render('register', {title: "Nuevo usuario"})
    },

    detalle: function (req,res) {
      socioId = null
      
      if(req.params.socioNro){
        socioId = req.params.socioNro
      }

      return res.render('userProfile', {id: socioId, title: "Mi Perfil"})




  }
}