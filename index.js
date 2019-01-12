const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = 'BG89PXhM56LF6vPnYe3FWKhNaWHil9iBIqq8NIDQOIGVT2b3dnN7VPoaU_sUyHBdyQxgEA1iWZQ1IZC4_Tf2WWo';
const privateVapidKey = '1V-gbSm6ECcsihZ8HR_TogsQ-hqfaEtJdikN4yIqstE';

webpush.setVapidDetails('mailsto:test@test.com', publicVapidKey, privateVapidKey);

// Subscribe Route
app.post('/subscribe', (req, res) => {
    // Get pushSubscription object
    const subscription = req.body;

    // Send 201 - resource created
    res.status(201).json();

    // Create payload
    const payload = JSON.stringify({
        title: 'Crazy about JS'
    })

    // Pass object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

const port = 4000;
app.listen(port, () => console.log(`Server started on port: ${port}`));