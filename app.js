import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import PlayerRouter from "./routes/player.route.js";
import path from "path";


import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname,"public")));
mongoose.connect("mongodb://localhost:27017/cricket")
.then(result=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));
    app.use("/player",PlayerRouter);
    app.listen(3000,()=>{console.log("server started......");})
    
}).catch(err=>{
    console.log(err);
})
