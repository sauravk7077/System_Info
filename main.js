const si = require('systeminformation');
const express = require('express');

var app = express();
//Register the view engine
app.set('view engine', 'ejs');

//Listening at port 3000
app.listen(3000);

//public folder is now public
app.use(express.static('public'));




app.get('/', (req, res)=> {
    si.osInfo()
    .then((data) => {
        data.title = "Home";
        res.render('index', {data: null});
        console.log(data);
    })
    
});

app.get('/os_info', (req, res)=>{
    si.osInfo()
    .then(data=>{
        data.title = "OS Info";
        res.render('index', {data:data});
    });
});

app.get('/cpu_info', (req, res)=> {
   
    si.cpu().then(
        data=>{
            data.title = "CPU Info";
            res.render('index', {data:data});
        }
    );
});