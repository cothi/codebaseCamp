const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req,res){
  res.sendFile(__dirname + "/public/index.html");
});


app.use(express.static('public'))

app.listen(port, () => console.log(`app listening on port ${port}!`))
