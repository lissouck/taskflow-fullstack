require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB'))
  .catch((err) => console.error('Erreur connexion MongoDB :', err));

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Routes
app.use('/api/tasks', taskRoutes);

// Route de test
app.get('/api/ping', (req, res) => {
  res.json({ message: "Serveur TaskFlow operationnel" });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});