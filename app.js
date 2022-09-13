const express = require("express");
const router = require("./routes");
const db = require("./core/db.js");
const app = express();

db();

app.use(express.json());
app.listen(3001, () => {console.log("running on port 3001");});