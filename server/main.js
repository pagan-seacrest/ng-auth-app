const bodyParser = require("body-parser");
const express = require("express");
const router = require("./router");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors);
server.use(bodyParser.json());
server.use("/api", router);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));

