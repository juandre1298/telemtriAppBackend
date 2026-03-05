
require('dotenv').config();
const express = require('express');
const routes = require('./route/sensorRoute.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
  res.status(200);
  res.send("Server is running")
})

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    const timestamp = new Date().toLocaleTimeString();
    const green = "\x1b[32m";
    const reset = "\x1b[0m";
    console.log(`[${timestamp}] ${green}${req.method}${reset} request to: ${req.originalUrl}`);
    next();
  });
}

app.use("/api", routes)

app.listen(PORT, (error)=>{
  if(!error){
    console.log("Server is Successfully Running in PORT: "+PORT)
  }else{
    console.log("Error occurred, server can't start", error)
  }
})
