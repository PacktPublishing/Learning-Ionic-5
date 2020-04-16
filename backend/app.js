const _ = require('lodash');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const bootstrap = require('./services/bootstrap');

console.log('Running in ' + env + ' environment...');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const distDir = __dirname + '/www/';
app.use(express.static(distDir));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-ijt');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    res.sendFile(path.join(__dirname, 'www/index.html'));
});

const url = _.get(config, 'mongo.url');

mongoose
    .connect(url, { autoIndex: false, useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected to Database!');
        bootstrap.bootstrapper();
    })
    .catch(() => {
        console.log('Connection to database failed');
    });

module.exports = app;
