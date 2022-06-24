const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin: *');
  res.header("Access-Control-Allow-Headers: X-RIOT-TOKEN, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  res.header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow: GET, POST, OPTIONS, PUT, DELETE");
})

app.use(express.static(path.join(__dirname, "dist/mf-portal")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-portal" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));