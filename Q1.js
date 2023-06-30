const express = require('express')
const Parser = require('parser')
const app = express()


app.use(parser())


app.get('/numbers',res) => {
  const number = [1, 2, 3, 4, 5]
  res.json(number)
})

