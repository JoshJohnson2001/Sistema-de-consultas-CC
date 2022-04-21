const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importing routes
const routes = require('./routes/pagPrincipal');
const routesClient = require('./routes/client');
const routesSupplier = require('./routes/supplier');
const routesMantening = require('./routes/mantening');
const routesVehicle = require('./routes/vehicle');
const routesDriver = require('./routes/driver');

// settings
app.set('port', process.env.PORT || 3000);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
/*app.use(myConnection(mysql, {
  host: 'mysql_server',
  user: 'admin',
  password: 'MyNewPass',
  port: 3306,
  database: 'systemCC'
}, 'single'));
app.use(express.urlencoded({extended: false}));*/
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'correcaminosdb'
}, 'single'));
app.use(express.urlencoded({extended: false}));


// routes
app.use('/', routes);
app.use('/', routesClient);
app.use('/', routesSupplier);
app.use('/', routesMantening);
app.use('/', routesVehicle);
app.use('/', routesDriver);


// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});




