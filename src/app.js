const express = require('express');
const app = express();
const fs = require('fs');

app.get('/health_data', (req, res) => {
    console.log("Pretending to gather health data...");
    const healthData = JSON.parse(fs.readFileSync('./healthdata.json', 'utf8'));
    res.json(healthData);
})

app.listen(3000, () => console.log('Listening on port 3000!'));
