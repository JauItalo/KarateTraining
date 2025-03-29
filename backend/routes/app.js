
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const trainingRoutes = require('./routes/trainingRoutes');

const app = express();


connectDB();

app.use(cors());
app.use(bodyParser.json());


app.use('/api/trainings', trainingRoutes);


app.get('/', (req, res) => {
  res.send('API Karate Training funcionando!');
});

module.exports = app;