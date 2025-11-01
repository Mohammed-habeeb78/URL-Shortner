import express from "express";
import connectToDB from "./config/db.js";
import urlRouter from "./routes/url.js";
import { redirectToUrl } from "./controllers/url.js";


const app=express();
const PORT=8000;

//database connection
connectToDB();

//use json
app.use(express.json());

//api routes

app.use("/api/url",urlRouter);
app.get("/:shortId",redirectToUrl);

app.listen(PORT,()=>console.log("started at 5000"));
