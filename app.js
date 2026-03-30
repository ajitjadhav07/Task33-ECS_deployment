const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Succesfully Deployed Application through Pipeline using  ECS Fargate ");
});

server.listen(3000);
