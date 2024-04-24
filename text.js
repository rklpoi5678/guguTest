const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
   res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
   const p = req.params
   const q = req.query

   console.log(q)
   console.log(q.q)
   console.log(q.name)
   console.log(q.age)
   res.json({'username': p.id})
})

app.get('/dog/:name', function (req, res) {
   const { name } = req.params;
   if(name == "dog"){
      res.json({"sound":name})
   } else if (name == "cat"){
      res.json({"sound":name})
   } else {
      res.json({"sound":'알수없음'})
   }
   
   console.log(name)
})

app.listen(3000)