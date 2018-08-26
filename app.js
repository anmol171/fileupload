// var http = require('http');

// var fs = require('fs');

// var server = http.createServer(function(req, res){
//     console.log('Request was made : ' +req.url);
//     // res.writeHead(200, {'Content-Type': 'text/html'});
//     // var myReadStream = fs.createReadStream(__dirname + '/index.html' , 'utf8');
//     // res.end('Hello World');

//     // myReadStream.pipe(res);

//     // res.end(myReadStream);

//     if(req.url === '/home' || req.url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         fs.createReadStream(__dirname + '/index.html' , 'utf8').pipe(res);
//     }
//     else if(req.url === '/contact'){
//         res.writeHead(200, {'Content-Type': 'text/html'});
        
//         fs.createReadStream(__dirname + '/contact.html' , 'utf8').pipe(res);
//     }




// });

var express = require('express');

var app = express();


app.set('view engine', 'ejs');

var bodyparser = require('body-parser');

var urlencodeParser = bodyparser.urlencoded({ extended: false });

app.unsubscribe('/assets', express.static('assets'));
// {

//     // console.log(req.url);
//     // next();
// });


app.get('/',function(req, res){
    // res.send('This is homepage');
    

        // res.sendFile(__dirname + '/index.html');

        res.render('index');
});

app.get('/contact',function(req, res){
    
    // res.sendFile(__dirname + '/contact.html');

    // console.log(req.query);
    res.render('contact',{qs: req.query});
});

// app.post('/contact', urlencodeParser, function(req, res){
//     console.log(req.body);
//     res.render('contact',{qs: req.query});
// });



app.post('/contact-success', urlencodeParser, function(req, res){
    console.log(req.body);
    res.render('contact-success', {data: req.body});
});



app.get('/profile/:name',function(req, res){
    
    res.render('profile', {person: req.params.name});


});



app.listen(3000);

