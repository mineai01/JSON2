const express = require('express');
const router = express.Router();

router.get('/*', function (req,res){
  res.status(404).send('not founded')
})

// router.get('/sdfkh', function (req,res){
//   res.send('not founded2')
// })



module.exports = router;