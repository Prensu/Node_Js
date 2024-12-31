const express = require('express'); // Import the Express framework

const app = express(); // Create an Express application instance

// Start the server on port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

// Define a route for the root URL ('/')
const path = require('path');

// Route to the "about.html" file

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html')); // Go up one level to "NODE_JS/views"
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html')); // Go up one level to "NODE_JS/views"
});

// Route to the "hacked.html" file
app.get('/hacked', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/404.html')); // Use the same path as above for testing
});

// Route to the "404.html" file
app.get('/404', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/404.html')); // Go up one level to "NODE_JS/views"
});
