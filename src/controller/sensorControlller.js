const service = require('../services/sensorService')


const fetchSensor = async (id) => {
  try{
    const data = await service.getSensorData(id);
    return data
  }catch(e){
    console.log("error: "+e)
  }
} 

const fetchSensorBatch = async (id) => {
  try{
    const data = await service.getSensorBatchData(id);
    return data
  }catch(e){
    console.log("error: "+e)
  }
} 

module.exports = { fetchSensor, fetchSensorBatch };
