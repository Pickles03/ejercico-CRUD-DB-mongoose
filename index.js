const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const tasksRoutes = require('./routes/tasks');
require('dotenv').config();

dbConnection();

app.use(express.json());
app.use('/', tasksRoutes);

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
