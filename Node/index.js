const dbconnect = require("./db");

const express = require("express");
const cors = require("cors");
const app = express();

dbconnect();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Port: ${port}`));
