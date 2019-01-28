var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var routes = require('./routes/route');
var app = express();

mongoose.connect('mongodb://localhost:27017/crud', { useNewUrlParser: true });
mongoose.connection.on('connected',() => {console.log('connected')});

mongoose.connection.on('error',(err) => {console.log(err)});

const PORT = 8081;

app.get('/', (req,res)=>{
    res.send('Welcome again');
});

app.use(cors());
app.use(bodyParser.json());
app.listen(PORT, ()=>{console.log('app running at'+PORT)});
app.use('/api', routes);

