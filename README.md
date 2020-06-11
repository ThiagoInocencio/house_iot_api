<h1 align="center">House Iot API</h1>
<div align="center">
  <p>
    <strong>A simple API to retrieve IoT devices measurements</strong>
  </p>
</div>

## About

For now the API has endpoints to receive measurementes of Dht11 (Temperature em Humidity Sensor) and Luminosity sensor Photoresistor GL5528 LDR THT.

<p align="center">
 <img src="./images/dht11.png" width="175" alt="Dht11 Sensor." />
 <img src="./images/gl5528_ldr_tht.jpg" width="175" alt="Photoresistor GL5528 LDR." />
</p>

## Endpoints

### Measurements

**POST** `http://localhost:5000/measurements/`

Content type: JSON

Field          | Type   | Description                    | Example
-------------- | ------ | ----------------------------------------------------- | --------------------------------
UUID\*         | String | Device Universal Unique ID                            | `"UUID": "db3ce218-ac22-11ea-bb37-0242ac130002"`
temperature\*  | Double | The environment temperature measured by the device    | `"temperature": 24.10`
humidity\*     | Double | The environment Humidity measured by the device       | `"humidity": 54.31`
luminosity\*     | Double | The environment luminosity measured by the device   | `"luminosity": 94.10`
\*required

```json
// POST http://localhost:5000/measurements/

{
    "UUID": "db3ce218-ac22-11ea-b....",
    "temperature": 24.10,
    "humidity": 54.31,
    "luminosity": 94.10
}
```
