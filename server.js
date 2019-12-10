'use strict';

const PORT = process.env.PORT || 3000; 
const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();

app.use(cors());


app.get('/location', (req, res) => {
  const geoData = require('./data/geo.json');
  console.log(geoData);
}),

