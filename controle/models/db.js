const Sequelize = require('sequelize')
const sequelize = new Sequelize('login', 'root', '32142970', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}