const casual = require('casual');

const SENSOR_TYPES = ['Temperature', 'Pulse', 'Location', 'Respiration'];

casual.define('sensor', function () {
  return {
    sensor_id: casual.uuid,
    type: casual.random_element(SENSOR_TYPES),
  };
});

class Sensor {
  constructor() {
    const { sensor_id, type } = casual.sensor;
    this.sensor_id = sensor_id;
    this.type = type;
  }
}

class Measure {
    constructor(sensor_id, ts, value) {
      this.sensor_id = sensor_id;
      this.ts = ts;
      this.value = value;
    }
  }

module.exports = { Sensor, Measure };