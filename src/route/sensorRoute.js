const express = require('express');
const router = express.Router();
const controller = require('../controller/sensorController');
const asyncHandler = require('../utils/asyncHandler');

router.get('/sensors', asyncHandler(controller.fetchSensorBatch));
router.get('/sensors/:id', asyncHandler(controller.fetchSensor));

module.exports = router;