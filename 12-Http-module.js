const http = require('http');

//server request bekliyorsa yanıt vermez
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops</h1>
    <p>We can't seem to fid the page you are looking for</p>
    <a href="/">back home page</a>
    `)
})

server.listen(5000)