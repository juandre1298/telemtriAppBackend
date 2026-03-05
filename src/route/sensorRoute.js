
const express = require('express');
const controller = require('../controller/sensorControlller')

const router = express.Router();

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

router.get('/sensors/batch', async (req, res)=>{
  let ids = req.query.ids;
  if(!ids) return;
  try{
    ids = ids.split(',')
    const data = ids.map( id => controller.fetchSensorBatch(id))
    res.status(200);
    res.send(ans)
  }catch(e){
    console.log(e)
  }

})



module.exports = router;