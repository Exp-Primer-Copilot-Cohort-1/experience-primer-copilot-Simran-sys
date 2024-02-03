// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('This is a GET request to /comments');
});

