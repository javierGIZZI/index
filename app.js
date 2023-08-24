const express = require('express')
const path = require(`path`)
const app = express()
const port = 3000

app.get('/index.html',(req, res) => {
  res. sendFile(path.join(_dirname,'/index.html'))
})
app.get('/',(req, res) =>
console.log(req.);

app.listen(port, () => { 
  console.log(`example app listeningon port ${port}`)
})
