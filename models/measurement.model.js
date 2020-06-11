const mongoose = require('mongoose');
const Double = require('@mongoosejs/double');

const Schema = mongoose.Schema;

const measurementSchema = new Schema({
    UUID: { type: String, required: true },
    temperature: { type: Double, required: true },
    humidity: { type: Double, required: true },
    luminosity: { type: Double, required: true },
    created_at: { type: Date, required: true, default: Date.now }
}
);


const Measurement = mongoose.model('Measure', measurementSchema);

module.exports = Measurement;