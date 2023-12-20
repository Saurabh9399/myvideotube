// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
import dotenv from 'dotenv';
// require("dotenv").config({path:'./env'});
import {app} from './app.js';

import { connectDB } from "./db/index.js";

dotenv.config({path:"./env"});

connectDB()
.then(()=>{
    app.listen(process.env.PORT,() => {
        console.log("Port is " + process.env.PORT);
    })
})
.catch((err) => {
    console.log("Mongodb connection eror!!!", err);
});




























/*
import express from 'express';

const app = express();

(async() => {
try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    app.on("error", (err) =>{
        console.log("Err",err);
        throw err;
    })

    app.listen(process.env.PORT,() => {
        console.log("App listening on port " + process.env.PORT);
    });

} catch (error) {
    console.error("Error", error);
    throw error;
}
})()

*/