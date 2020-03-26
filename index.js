const http = require("http"); //Require http module

//Create a http server
const server = http.createServer((req, res) => {
  res.end(
    `<!DOCType html>
      <html>
        <body>
          <form action="/message" method="post">
            <input type="text" name="message/>
            <input type="submit">
          </form>
        </body>
      </html>
    `)
});

//PORT
const PORT = 8080;
const HOSTNAME = "127.0.0.1";

server.listen(PORT, HOSTNAME, () => console.info("App is listening to port ", PORT));