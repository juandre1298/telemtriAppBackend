const service = require('../services/sensor')
const sensorCallback = (status, obj)=>{
  if(status === 'Sensor Fail'){
    throw error('sensor fail')
  } else{
    return obj.id*obj.val
  }
}
const fetchSensor = async (id) => {
  try{
    const data = await service.getSensorData(id, sensorCallback);
    console.log(data)
    return data
  }catch(e){
    console.log("error: "+e)
  }
} 



module.exports = { fetchSensor };
