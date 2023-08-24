const express = require('express');
const notesRoutes = require('./notesRoutes');
const htmlRoutes = require('./htmlRoutes');

const app = express();

app.use('/api/notes', notesRoutes);
app.use('/', htmlRoutes);

module.exports = app;