const si = require('systeminformation');
const express = require('express');

var app = express();
//Register the view engine
app.set('view engine', 'ejs');


app.listen(3000);

app.get('/', (req, res)=> {
    si.osInfo()
    .then((data) => {
        res.render('index', {data: data});
        console.log(data);
    })
    
});