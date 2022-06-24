const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors())

app.options('*', cors());

var whitelist = ['https://la2.api.riotgames.com']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('X-RIOT-TOKEN')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(express.static(path.join(__dirname, "dist/mf-portal")))
  .get("*", cors(corsOptionsDelegate), (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-portal" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));