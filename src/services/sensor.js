const getSensorData = (id, callback) => {
  return new Promise( (resolve, reject)=>{
     setTimeout(() => {
      if (id === 'error') return callback('Sensor Fail', null);
      const stamp = {
        time: new Date(), 
        val: callback(null, { id, val: Math.random() * 100 })}
      resolve(stamp);
    }, 500)
  })

}

module.exports = { getSensorData };