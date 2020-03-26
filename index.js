const http = require("http"); //Require http module

//Create a http server
const server = http.createServer((req, res) => {

});

//PORT
const PORT = 8080;
const HOSTNAME = "127.0.0.1";

server.listen(PORT, HOSTNAME, () => console.info("App is listening to port ", PORT));