const express = require('express')

const router = express.Router()

router.get('/tickets', (req, res) => {
  res.json({
    adult: 3500,
    concession: 2500,
    children: 2000
  })
})

module.exports = router
