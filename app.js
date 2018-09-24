'use strict';

const express = require('express'),
bodyParser = require('body-parser'),
cookieParser = require('cookie-parser'),
fs = require('fs'),
app = express(),
router = express.Router();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    console.log(__dirname + 'index.html');
    res.sendFile(__dirname + 'index.html');
});

app.listen(3000, () => {
    console.log('Server listening on port 3k');
});