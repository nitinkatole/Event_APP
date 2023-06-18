const express = require("express")
const eventsRouter = require("./routes/events")
const bodyParser=require('body-parser')
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json())
app.use("/api/v3/app",eventsRouter)

mongoose.connect(process.env.DB_CONNECTION_URL,() =>{

});
app.listen(process.env.PORT, ()=>{
    console.log("server is running...");
});