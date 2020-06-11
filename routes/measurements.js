const router = require('express').Router();
let Measurement = require("../models/measurement.model");
const fs = require('fs');

function load() {
    let db = fs.readFileSync('database/measurements.json');
    return JSON.parse(db);
}

function write(json) {
    fs.writeFileSync('database/measurements.json', JSON.stringify(json));
}

router.route('/').get((req, res) => {
    var measurements = load();
    res.status(200).json(measurements);
});

router.route('/').post((req, res) => {

    const UUID = req.body.UUID;
    const temperature = req.body.temperature;
    const humidity = req.body.humidity;
    const luminosity = req.body.luminosity;

    const newMeasurement = new Measurement({ UUID, temperature, humidity, luminosity });

    var measurements = load();
    measurements.push(newMeasurement);
    write(measurements);

    res.json(newMeasurement);
})

router.route('/:UUID').get((req, res) => {
    var measurements = load();
    var measurement = measurements.filter(measurement => measurement.UUID === req.params.UUID);
    res.json(measurement[0]);
});

/*
router.route('/:UUID').delete((req, res) => {
    var measurements = load();
    var newList = measurements.filter(measurement => measurement.UUID !== req.params.UUID);
    write(newList);
    res.json('Measurement removed');
});

router.route('/:UUID').put((req, res) => {
    var measurements = load();
    measurements.map(measurement => {
        if (measurement.UUID === req.params.UUID) {
            measurement.temperature = req.body.temperature !== undefined ? req.body.temperature : measurement.temperature;
            measurement.humidity = req.body.humidity !== undefined ? req.body.humidity : measurement.humidity;
            measurement.luminosity = req.body.luminosity !== undefined ? req.body.luminosity : measurement.luminosity;
        }
    });

    gravar(measurements);

    res.json('Measurement updated');
});
*/

module.exports = router;