require("dotenv").config();
const express = require("express");
const connToDataBase = require("./configure/todoDatabase");
const todoRoutes = require("./route/todoRoutes");
const app = express();
const cors = require('cors')

app.use(cors());

// Middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// connect to databse
connToDataBase();

app.use("/",todoRoutes);

module.exports = app