const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

const measurementsRoutes = require("./routes/measurements");

app.use('/measurements', measurementsRoutes);

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
})