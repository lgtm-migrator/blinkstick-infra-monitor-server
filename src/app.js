const express = require('express')
const app = express()

app.get('/health_data', (req, res) => {
    console.log("Pretending to gather health data...");
    const healthData = require('./healthdata.json');
    res.json(healthData);
})

app.listen(3000, () => console.log('Listening on port 3000!'))
