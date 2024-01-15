const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const productRouter = require('./routes/product.router')



app.use('/api/v1/product', productRouter)

app.get("/", (req, res) => {
  res.send("Route is working........");
});






module.exports = app;
