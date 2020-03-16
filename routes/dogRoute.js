const express = require('express');
const router = express.Router();

router.post('/walk', function (req,res){
  res.send('dog walk')
})

router.post('/play', function (req, res) {
  res.send('dog play')
})

module.exports = router;