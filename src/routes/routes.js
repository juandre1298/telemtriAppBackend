
const express = require('express');
const controller = require('../controllers/sensors')

const router = express.Router();


router.get('/sensors/batch', async (req, res)=>{
  console.log(req)
  // const id = req
  // if(!id) return;
  // const data = await controller.fetchSensor(id);
  res.status(200);
  res.send('ok')
})

router.get('/sensors/:id', async (req, res)=>{
  const id = req.params.id
  if(!id) return;
  const data = await controller.fetchSensor(id);
  res.status(200);
  res.send(data)
})




module.exports = router;