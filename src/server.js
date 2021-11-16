const express = require("express");
require('dotenv').config()
require("./db/mongoose");

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Backend server is up on PORT: ${PORT}`);
});
