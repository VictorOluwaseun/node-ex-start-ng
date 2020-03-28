const {
  parse
} = require("querystring");

module.exports = function (req, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";

  if (req.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => callback(parse(body)))
  } else {
    callback(null);
  }
}