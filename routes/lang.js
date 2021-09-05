const langs = require('../langs/index')
const { Router } = require('express')
const lang = Router()

lang.get('/lang/:type', (req, res) => {
  const langType = req.params.type

  if (!langs[langType]) return res.sendStatus(404)

  res.send(langs[langType])
})

module.exports = lang