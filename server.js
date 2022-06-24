const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors())

var whitelist = ['https://la2.api.riotgames.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.static(path.join(__dirname, "dist/mf-portal")))
  .get("*", cors(corsOptions), (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-portal" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));