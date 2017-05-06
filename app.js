'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;      

// =======================
// Middleware
// =======================

app.use(favicon(path.join(__dirname, 'favicon.ico')));  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));   

// =======================
// Environment
// =======================

var publicPath = './build/dev';

// Configure hot reloading with Webpack
if (process.env.NODE_ENV === 'hotreloading') {
    const webpack = require('webpack');
    const config = require('./webpack/config.hot.js');
    const compiler = webpack(config);

    // Add middleware
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(require('webpack-hot-middleware')(compiler));
} else {
    if (process.env.NODE_ENV === 'production') {
        // Production
        publicPath = './build/prod';
    } // Or, development

    // Serve our static stuff like index.css
    app.use(express.static(path.join(__dirname, publicPath)))
}

// =======================
// Routes 
// =======================

// Wildcard routes (defer to client-side routing)
app.get('*', (req, res) => {
    if (req.url.indexOf('.pdf') === -1) {
        res.status(200).sendFile(path.resolve(__dirname, publicPath, 'index.html'));
    } 
});

// =======================
// Start the server
// =======================

app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});