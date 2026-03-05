
const express = require('express');
const controller = require('../controller/sensorControlller')

const router = express.Router();


router.get('/sensors/', async (req, res)=>{
  let ids = req.query.ids;
  if(!ids){
    res.status(404);
    console.error('No ids received')
    res.send('No ids received')
    return
  }
  try{
    ids = ids.split(',')
    const data = await controller.fetchSensorBatch(ids)
    res.status(200);
    res.send(data)
  }catch(e){
    res.status(500);
    console.error(e)
    res.send('Internal Error')
  }
})

router.get('/sensors/:id', async (req, res)=>{
  const id = req.params.id
  if(!id) return;
  try{
    const data = await controller.fetchSensor(id);
    res.status(200);
    res.send(data)
  }catch(e){
    console.log(e)
  }
})




module.exports = router;