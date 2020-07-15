const express = require('express')
const fs = require('fs')
const path = require('path')

const server = express()

server.use('/js/', express.static(path.join(__dirname, './js')))
server.use('/css/', express.static(path.join(__dirname, './css')))
server.use('/img/', express.static(path.join(__dirname, './img')))
server.use('/index.json', (req, res) => {
  fs.readFile(path.join(__dirname, './index.json'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return res.json({ code: 1 })
    }
    res.setHeader('Content-Type', 'application/json')
    res.send(data)
  })
})

server.use((req, res) => {
  fs.readFile(path.join(__dirname, './index.html'), 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      return res.json({ code: 1 })
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    return res.send(data)
  })
})

server.listen(7777, () => {
  console.log('server start at port 7777')
})