const express = require("express");
const routes = require("./routes.js");
const server = express();
let counter = 0;

server.use((req, res, next) => {
  if (req) {
    counter++;
    console.log(`The aplication has been runned ${counter} times`);
  }
  return next();
});

server.use(express.json());
server.use(routes);

server.listen(3000);
