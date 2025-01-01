//middleware using third party 
const express = require('express');
const morgan=require('morgan');
const path = require('path'); // For resolving directory paths

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the directory for EJS templates
app.set('views', path.join(__dirname, 'Ejs'));




app.use(morgan('dev'));
app.get('/', (req, res) => {
  const blogs = [
    { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' }
  ];
  res.render('index', { title: 'Home', blogs });
});

//route for the about page
app.get('/about',(req,res) =>
{
    res.render('about',{title:'about'});
});

app.get('/blogs/create',(req,res) =>{
    res.render('create',{title:"create a new blog"});
});

// Start the server on port 4000
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});