const sensorCallback = (status, obj)=>{
  if(status === 'Sensor Fail'){
    throw error('sensor fail')
  } else{
    return obj.id*obj.val
  }
}

const getSensorData = (id) => {
  return new Promise( (resolve, reject)=>{
     setTimeout(() => {
      if (id === 'error') return sensorCallback('Sensor Fail', null);
      const stamp = {
        time: new Date(), 
        val: sensorCallback(null, { id, val: Math.random() * 100 })}
      resolve(stamp);
    }, 500)
  })
}

const getSensorBatchData = async (ids) =>{
  if(!ids){
    throw Error('No Ids')
  } 
  const ans = ids.map(id => getSensorData(id))
  return await Promise.all(ans)
}


module.exports = { getSensorData, getSensorBatchData };