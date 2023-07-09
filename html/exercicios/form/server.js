const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/usuarios', (req, resp) => {
    if (req.body !== undefined) {
        console.log(req.body)  // POST
    } else if (req.query !== undefined) {
        console.log(req.query) // GET
    }
    for (let key in req.body) {
        if (req.body[key] === '') {
            resp.send('<h1>Erro. Preencha todos os campos!</h1>')
            return
        }
    }
    resp.send('<h1>Parabéns. Usuário incluído!</h1>')
})

app.post('/usuarios/:id', (req, resp) => {
    // console.log(req.params.id)
    if (req.body !== undefined) {
        console.log(req.body)  // POST
    } else if (req.query !== undefined) {
        console.log(req.query) // GET
    }
    resp.send('<h1>Parabéns. Usuário alterado!</h1>')
})

app.listen(8080)