const express = require('express');
const hbs = require('hbs');
var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
app.use((req,res,next)=>{
  var now = new Date().toString();
  console.log(`${now}:${req.method}:${req.url}`);
next();
});
app.get('/',(req, res)=>{
  res.render('home.hbs',{
    titlePage: 'Home page',
    currentYear: new Date().getFullYear()
  });
});
app.get('/about', (req, res) =>{
  console.log('here');
  res.render('about.hbs',{
    titlePage: 'About page'
  });
});

app.listen(port,()=>{
  console.log(`Server run on ${port}`);
});
