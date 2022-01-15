const dbconnect = require("./db");
const route = require("./routes/route");
const express = require("express");
const cors = require("cors");
const app = express();

dbconnect();

app.use(cors());
app.use(express.json());

app.use("/api/route", route);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Port: ${port}`));
