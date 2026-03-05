const service = require('../services/sensorService')


const fetchSensor = async (id) => {
  try{
    const data = await service.getSensorData(id);
    return data
  }catch(e){
    console.log("error: "+e)
  }
} 

const fetchSensorBatch = async (ids) => {
  try{
    const data = await service.getSensorBatchData(ids);
    return data;
  }catch(e){
    console.log("error: "+ e)
  }
} 

module.exports = { fetchSensor, fetchSensorBatch };
