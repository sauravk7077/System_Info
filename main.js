const si = require('systeminformation');
const express = require('express');

var app = express();
app.set('view engine', 'ejs');


app.listen(3000);

app.get('/', (req, res)=> {
    si.versions()
    .then(() => {
        res.render('./static/index', {data: "This is the data."});
    })
    
});