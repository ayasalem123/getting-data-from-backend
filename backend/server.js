import express from "express";
// import bodyParser from "body-parser";
 import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/routes.js";
const app=express();
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1/essaiedb",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(
   ()=>app.listen(500,()=>{console.log("listening to port 500")})
).catch(
    (error)=>console.log(error)
)

app.use(cors())
app.use(router)
