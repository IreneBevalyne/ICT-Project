const express = require('express');
const app = express();
const PORT = 5000;
require('express-validator');
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

app.get('/', (req, res)=>{
    res.redirect('/login')
})


app.get('/login', (req, res) => {
    res.sendFile('pages/index.html', {root: __dirname })
})

app.post('/login', (req, res) => {
    console.log(req.body);

    //validate the data sent
    req.checkBody('username', 'Name is required!').notEmpty();
    req.checkBody('password', 'Enter 6+ character strong password').notEmpty().isLength({min: 6});

    //store sanitisation errors
    var errors = req.validationErrors();

    if(errors){

        /**
         * Resubmit form and display the errors in a flash(popup) message
         */

        
        console.log(errors)
    } else{

        /**
         * Save to database
         * and
         * redirect to another page
         */


        res.sendStatus(200).send('Your form was submitted!')
    }
})



app.listen(PORT, ()=>{
    console.log(`Server is running and listening on port ${PORT}`);
})