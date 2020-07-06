

const express = require('express');
const app = express();
let cors = require('cors');
const bodyParser = require('body-parser');

const route = require('../routes/index');


const port = 3001;
const connection = require('../src/connection');

var whitelist = ['http://localhost:3000', 'http://localhost:3001']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());

//app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use('/api',route);

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})

connection.connection();

