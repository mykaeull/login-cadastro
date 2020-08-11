const db = require('./db')

const Usuarios = db.sequelize.define('usuarios', {
    user: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    }
})

// usuarios.sync({ force: true })

module.exports = Usuarios