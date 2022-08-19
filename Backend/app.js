require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const userRouter = require("./api/routers/router");

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use("/api", userRouter);
const port = process.env.PORT;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
