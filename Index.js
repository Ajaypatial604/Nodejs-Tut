const fs = require("fs");
const http = require("http");
const data = require("./data1");
// const input = require("process").argv;
const path = require("path");
const dirPath = path.join(__dirname, "Files");

http
  .createServer((req, res) => {
    res.writeHead(200, "application/json");
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(3000);
console.log(data);
