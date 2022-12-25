const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { dirname } = require("path");

const file = fs.readFileSync("./7184CF8DE9EE76FDC3B06D426284F3CA.txt");
const app = express();

// app.use(cors);

app.get("/api", (req, res, next) => {
  res.json({ messge: "hello world" });
});

app.get(
  "/home/ec2-user/hello/7184CF8DE9EE76FDC3B06D426284F3CA.txt",
  (req, res, next) => {
    res.sendFile(
      "C:/Users/akgec/Downloads/7184CF8DE9EE76FDC3B06D426284F3CA.txt"
    );
  }
);

app.listen(3002);
