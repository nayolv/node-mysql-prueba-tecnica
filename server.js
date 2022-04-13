const express = require('express');
const app = express();
const mysql = require('mysql');
const myconn = require('express-myconnection');
const cors = require('cors');
const routes = require('./routes');

//settings
app.set('port', process.env.PORT || 9000);

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '2811140516VaEm',
    database: 'reto',
}

//middlewares
app.use(express.json());
app.use(myconn(mysql, dbOptions, 'single'))
app.use(cors());

//routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/api', routes);

//Server start
app.listen(app.get('port'), () => {
    console.log('Server is running', app.get('port'));
});