const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require("cors");

const app = express();
if (app.get('env') == "development") {
    require("dotenv").config();
}
const { connectDB } = require("./server/_config/Database.config")
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(('client/build')));
app.use(cookieParser());
app.use(methodOverride("_method"));

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}
app.use('/api/products', require('./server/routes/products.routes'));
app.use('/api/cart', require('./server/routes/cart.routes'))

module.exports = app;
