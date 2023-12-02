const http = require('http');

const handler = (request, response) => {
 console.log("sample message");
}

const server = http.createServer(handler);
const port = 3000;

server.listen(port, () => {
 console.log("serwer działa na porcie", port);
}) 