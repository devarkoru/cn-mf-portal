const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;

var app = express()

app.use(cors({
  'allowedHeaders': ['x-riot-token', 'Content-Type'],
  'exposedHeaders': ['x-riot-token'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}));
app.options('*', cors());

app.use(express.static(path.join(__dirname, "dist/mf-portal")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-portal" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));