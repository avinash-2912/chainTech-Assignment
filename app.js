const express = require('express');
require('dotenv').config();
const connectDb = require('./lib/db');
const userRoute = require('./routes/user-route');

const app = express();

app.use(express.json());

connectDb();

app.use('/user',userRoute);

app.listen(8080,()=>{
    console.log("server is running")
})