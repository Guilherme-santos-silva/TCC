const Sequelize = require('sequelize');

const sequelize = new Sequelize("tcc", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o Banco de Dados realizada")
}).catch(function(){
    console.log("Erro: Conexão com o Banco de Dados não realizada")
})

module.exports = sequelize;