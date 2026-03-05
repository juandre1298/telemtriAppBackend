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

const getSensorBatchData = (id) =>{
  console.log('todo cool')
}


module.exports = { getSensorData, getSensorBatchData };