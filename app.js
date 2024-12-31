const express = require('express');
const path = require('path'); // For resolving directory paths

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'Ejs'));

// Start the server on port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});



app.get('/', (req, res) => {
    res.render('index',{title: 'Home'}); // Go up one level to "NODE_JS/views"
});

app.get('/about', (req, res) => {
    res.render("about") // Go up one level to "NODE_JS/views"
});

app.get('/blogs/create', (req, res) => {
    res.render("create") // Go up one level to "NODE_JS/views"
});

// Route to the "404.html" file
app.use((req, res) => {
    res.status(404).render("404");// Use the same path as above for testing
});




