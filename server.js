const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res)=>{
    let path = './views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/index':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path+='404.html';
            break;
    }
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path,(err, data) =>{
        if(err){
            console.log(err)
        }
        else{
            res.write(data);
            res.end();
        }
    });
});
server.listen(3000, 'localhost', () =>{
    console.log('listening to request on port 3000...')
})