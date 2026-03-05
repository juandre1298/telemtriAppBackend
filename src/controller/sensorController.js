const service = require('../services/sensorService');

const SensorController = {
  fetchSensor: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "ID is required" });

    const data = await service.getById(id);
    res.status(200).json(data);
  },

  fetchSensorBatch: async (req, res) => {
    const { ids } = req.query;
    if (!ids) return res.status(400).json({ error: "IDs query param is required" });

    const idList = ids.split(',').map(id => id.trim()).filter(Boolean);
    
    const data = await service.getBatch(idList);
    res.status(200).json(data);
  }
};

module.exports = SensorController;