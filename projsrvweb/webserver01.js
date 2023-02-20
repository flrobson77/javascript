const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statuscode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world\n');    
});

server.listen(port, hostname, () => {
    console.log(`Servidor Rodando!!! acesse http://${hostname}:${port}`);
});