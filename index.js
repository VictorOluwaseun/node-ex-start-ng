const http = require("http"); //Require http module
const requestAndResponseCycleHandler = require('./requestAndResponseController')


//Create a http server
const server = http.createServer(requestAndResponseCycleHandler);

//PORT
const PORT = 8080;
const HOSTNAME = "127.0.0.1";

server.listen(PORT, HOSTNAME, () => console.info("App is listening to port ", PORT));