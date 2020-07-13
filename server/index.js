const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://testDB:1234567890@cluster0-3zzdx.mongodb.net/bitProject?retryWrites=true&w=majority",
{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true,
    useFindAndModify : false
})
let db = mongoose.connection;
db.once('open', ()=>{
    console.log('DB Connected!!');
})
db.on('error',(err)=>{
    console.log(err);
})

app.use('/api',require('./routes/index'))

app.listen(4000,()=>{
    console.log('Server is Running... http://localhost:4000');
})