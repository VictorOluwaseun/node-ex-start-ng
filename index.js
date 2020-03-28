const http = require("http"); //Require http module
const path = require("path");
const fs = require("fs");

const collectRequestData = require("./collectRequestData");


//Get the Form Template
const filePath = path.join(__dirname, "public", "index.html");
const formTemp = fs.readFileSync(filePath, "utf-8");

//Get Not found file


//Create a http server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(formTemp);
    res.end();
  } else if (req.url === "/message" && req.method === "POST") {
    collectRequestData(req, result => {
      const {
        message
      } = result;
      fs.access(path.join(__dirname, "output", "message.txt"), (err) => {
        if (err) {
          console.log("The file does not exits.");
          //make the directory
          fs.mkdir(path.join(__dirname, "output"), {}, err => {
            if (err) throw err;
            //write message to file
            fs.writeFile(path.join(__dirname, "output", "message.txt"), message, "utf-8", err => {
              if (err) throw err;
            })
          });
        } else {
          console.log("File exits");
          fs.appendFile(path.join(__dirname, "output", "message.txt"), `\n${message}`, "utf-8", err => err && err);
        }
      })
      res.end(`<h1>Your data is collected successfully!</h1>
      <a href="/"><button>Back</button></a>`);
    })
  } else {
    res.write("<h1>Page Not Found</h1>");
    res.writeHead(404, {
      "Content-type": "html/text"
    });
    res.end();
  }
});

//PORT
const PORT = 8080;
const HOSTNAME = "127.0.0.1";

server.listen(PORT, HOSTNAME, () => console.info("App is listening to port ", PORT));