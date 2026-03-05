const SensorData = (id, val) => ({
  id,
  value: parseFloat(val.toFixed(2)),
  timestamp: new Date().toISOString()
});

const SensorService = {
  async getById(id) {
    if (id === 'error') throw new Error('SENSOR_HARDWARE_FAILURE');
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(SensorData(id, Math.random() * 100));
      }, 500);
    });
  },

  async getBatch(ids) {
    if (!Array.isArray(ids)) throw new Error('INVALID_INPUT_TYPE');
    return Promise.all(ids.map(id => this.getById(id)));
  }
};

module.exports = SensorService;