const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from ECS Fargate ");
});

server.listen(3000);
