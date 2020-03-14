const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.get('/', (req, res)=>{
    res.send({filmes: []})
})

let count = 0
let posts = []

app.get('/posts', (req, res)=>{
    res.send({posts})
})

app.post('/post', (req, res)=>{
    count++
    req.body.id = count
    posts = [req.body, ...posts]
    res.send({message: 'Postado com sucesso!', post: req.body})
})

app.delete('/post', (req, res)=>{
    posts = posts.filter(post=> post.id != req.query.id)
    console.log(req.query)
    res.send({message: 'Deletado com sucesso!'})
})


// require('./controller/authController')(app)

app.listen(3000)