require('dotenv').config();
const moment = require('moment');
const { Sensor } = require('./model');
const INTERVAL = 1000;
const BUFFER_INTERVAL = 5000;

function main() {
    // Generate random sensors
const sensors = new Array(casual.integer(1, 4))
.fill()
.map(() => new Sensor());

// Save sensors
for (let sensor of sensors) {
console.log(`New sensor # ${sensor.sensor_id}`);
}
// Generate random measurements
 }
    
main();