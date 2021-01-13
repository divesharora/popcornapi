const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();



app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false ,limit: '50mb'}));

const userRoutes = require("./routes/route.js")
app.use('/',userRoutes);




const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is connected to port ${PORT}`)
  });