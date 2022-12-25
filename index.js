const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { dirname } = require("path");
const https = require("https");

const key = fs.readFileSync("private.key");
const cert = fs.readFileSync("certificate.crt");
const app = express();

// app.use(cors);

const cerd = {
  key,
  cert,
};

app.get("/api", (req, res, next) => {
  res.json({ messge: "hello work" });
});

// app.get(
//   "/home/ec2-user/hello/7184CF8DE9EE76FDC3B06D426284F3CA.txt",
//   (req, res, next) => {
//     res.sendFile(
//       "C:/Users/akgec/Downloads/7184CF8DE9EE76FDC3B06D426284F3CA.txt"
//     );
//   }
// );

app.listen(3002);

const httpsServer = https.createServer(cerd, app);
httpsServer.listen(8443);
