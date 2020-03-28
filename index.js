const http = require("http"); //Require http module
const path = require("path");
const fs = require("fs");

const collectRequestData = require("./collectRequestData");


//Get the Form Template
const filePath = path.join(__dirname, "public", "index.html");
const formTemp = fs.readFileSync(filePath, "utf-8");


//Create a http server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(formTemp);
  }
  if (req.url === "/message" && req.method === "POST") {
    collectRequestData(req, result => {
      console.log(result.message);
      res.end(`The data entered is ${result.message}`);
    })
  } else {
    res.writeHead(404, {
      "Content-type": "html/text"
    });
    res.end("<h1>Page Not Found</h1>");
  }
});

//PORT
const PORT = 8080;
const HOSTNAME = "127.0.0.1";

server.listen(PORT, HOSTNAME, () => console.info("App is listening to port ", PORT));