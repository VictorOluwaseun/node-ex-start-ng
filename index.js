const http = require("http"); //Require http module
const {
  parse
} = require("querystring");

//Create a http server
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk
        .toString(); //Convert Buffer to string
    })
    req.on("end", () => {
      const {
        message
      } = parse(body);
      console.log(message);
    })
    res.end("ok");
  } else {
    res.end(
      `<!DOCType html>
        <html>
          <body>
            <form action="/message" method="post">
              <input type="text" name="message" />
              <input type="submit" value="Submit"/>
            </form>
          </body>
        </html>
      `)
  }
});

//PORT
const PORT = 8080;
const HOSTNAME = "127.0.0.1";

server.listen(PORT, HOSTNAME, () => console.info("App is listening to port ", PORT));