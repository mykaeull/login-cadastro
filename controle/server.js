const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { query } = require('express')
const Usuarios = require('./models/cadastro')


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.body.user)
    let login = req.body.user
    let senha = req.body.password
    console.log('login: ', login)
    console.log('senha: ', senha)

    Usuarios.findAll().then(function(usuarioss) {
        listUsuarios = []
        listSenhas = []
        for (let i = 0; i < usuarioss.length; i++) {
            listUsuarios.push(usuarioss[i].dataValues.user)
            listSenhas.push(usuarioss[i].dataValues.password)
        }
        for (let j = 0; j < listUsuarios.length; j++) {
            if ((listUsuarios[j] == login) && (listSenhas[j] == senha)) {
                console.log('usuario logado!')
                res.send('<h1>Logado com sucesso!</h1>')
                break
            } else {
                if (j == ((listUsuarios.length) - 1)) {
                    console.log('login inválido!')
                    res.send('<h1>Dados inválidos!</h1>')
                }
            }
        }
    })

    //Usuarios.create({
    //    user: login,
    //    password: senha
    //}).then(function() {
    //    console.log('usuario cadastrado com sucesso!')
    //}).catch(function(err) {
    //    console.log('Falha ao cadastrar: ' + err)
    //})

})

app.post('/cadastro', (req, res) => {
    res.send('<h1>DEU CERTOOO</h1>')
})

app.listen(3030)