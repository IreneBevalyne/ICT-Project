const express = require('express');
const app = express();
const PORT = 5000;
var cors = require('cors');
const corsOptions = {
    origin: ["http://localhost:5000"],
    credentials: true, 
    optionsSuccessStatus: 200,
    methods: "GET, PUT, DELETE, PATCH, POST"
}
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors(corsOptions));


// Set public folder
app.use('/', express.static('public/'));


app.get('/login', (req, res) => {
    res.sendFile('pages/index.html', {root: __dirname })
})

app.post('/login', (req, res) => {
    console.log(req.body);

})



app.listen(PORT, ()=>{
    console.log(`Server is running and listening on port ${PORT}`);
})