const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');
const API_SERVICE_URL = "https://la2.api.riotgames.com";

var app = express()

app.use(cors())

app.use('', (req, res, next) => {
   if (req.headers.authorization) {
       next();
   } else {
       res.sendStatus(403);
   }
});

// Proxy endpoints
app.use('/lol/league/v4/entries/by-summoner/', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
      [`^/lol/league/v4/entries/by-summoner/`]: '',
  },
}));

app.use(express.static(path.join(__dirname, "dist/mf-portal")))
  .get("*", (req, res) => {
    res.sendFile("index.html", { root: "dist/mf-portal" });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));