const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mykas',
    password: '32142970',
    database: 'login'
})

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});


app.use(bodyParser.urlencoded({ extended: true }))

app.post('/home', (req, res) => {
    let user = req.body.user
    let password = req.body.password
    console.log(user)
    console.log(password)
    connection.query(`INSERT INTO usuarios(user, password) VALUES ("${user}", "${password}")`, function(error, results, fields) {
        if (error) throw error;
        console.log("conexão bem sucedida!")
    })
    res.sendFile("C:/Users/mykaeull/Desktop/projeto-solo/teste.html")
})

app.listen(3030)