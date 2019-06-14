require('./models/db');

const express = require('express'),
      path = require('path'),
      exphbs = require('express-handlebars'),
      menuController = require('./controllers/menuController'),
      port = process.env.PORT || 5000;

var app = express();

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'index', layoutsDir: __dirname + '/views/layout/' }));
app.set('view engine', 'hbs');

app.listen(port, () => console.log(`Server started on port ${port}`));
app.use('/menu', menuController)