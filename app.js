const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

// Route home pour confirmer que le backend tourne
app.get('/', (req, res) => {
  res.send('Backend AI Guardian API is running 🚀');
});

// Connexion MongoDB
mongoose.connect(process.env.DB_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = app;
