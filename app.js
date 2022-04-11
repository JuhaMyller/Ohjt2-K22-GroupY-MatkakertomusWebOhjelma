const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const requireAuth = require('./middleware/requireAuth');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

const ErrorHandler = require('./middleware/errorHandler');
const userRoutes = require('./Routes/userRoutes');
const matkakohdeRoutes = require('./Routes/matkakohteetRoutes');
const tarinaRoutes = require('./Routes/tarinatRoutes');
const sendImage = require('./middleware/sendImage');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.static(path.join(__dirname, '/client/build')));

//http://localhost:4000/

app.use('/api/user', userRoutes);
app.use('/api/tarina', requireAuth, tarinaRoutes);
app.use('/api/matkakohde', matkakohdeRoutes);

//Lataa kuvan clientille
app.get('/img/:key', sendImage);
//Palauttaa react sivun serveriltä
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use(ErrorHandler);

mongoose
  .connect(process.env.DB_CONNECTION_STRING)
  .then(() => {
    console.log('Yhdistetty databaseen');
  })
  .catch((err) => console.error(err));

module.exports = app;
