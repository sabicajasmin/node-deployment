const express = require('express');
const app = express();
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();

// Middleware to parse JSON
app.use(express.json());

// Use form routes
app.use(formRoutes);

// ...existing code...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
