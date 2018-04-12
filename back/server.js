const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())


const html = `
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <title>Formulaires</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <style>
    body { font-size: 20px; }
    input { border: 1px solid #ddd; border-radius: 3px; padding: 5px 10px; }
  </style>
  <body>

    <div class="container" id="main"></div>

    <script src="/js/app.js"></script>
  </body>
</html>`

app.get('*', (req, res) => {
  res.send(html)
  res.end()
})

console.log('Server listening on http://127.0.0.1:4000')
app.listen(4000)
