const express = require('express');
const mongoose = require('mongoose');
const fileupload = require('express-fileupload')
const bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const db = 'mongodb://localhost/pp';
const profile = require('./routes/profile');

//  start application
const app=express();

//BD connection
mongoose.connect(db);

//  public static files
app.use(express.static('uploads'));

//  middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(fileupload());
app.use('/profile',profile)

//  start file
app.get('/', (req,res) => {
    res.sendFile(__dirname + "/index.html")
});

//
app.get('/testgit', (req,res) => {
    res.json({json : "ok"})
});


//  start server
app.listen(port,function(){
    console.log('app listening on port ' + port);
});