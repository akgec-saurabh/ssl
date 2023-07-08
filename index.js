const https = require("https");
const fs = require("fs");

// Read the private key and certificate files
const privateKey = fs.readFileSync("./private.key", "utf8");
const certificate = fs.readFileSync("./certificate.crt", "utf8");

// Create the HTTPS server
const options = {
  key: privateKey,
  cert: certificate,
};

const server = https.createServer(options, (req, res) => {
  // Handle incoming requests here
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, HTTPS server!");
});

// Start the server
server.listen(443, () => {
  console.log("HTTPS server is running on port 443");
});
