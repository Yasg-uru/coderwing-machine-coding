import express from "express";
import  { config } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import { connectDb } from "./config/connectDb.js";
import userRoute from "./routes/auth.js";

import productRouter from "./routes/product.routes.js";
config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use("/user", userRoute);
app.use("/product", productRouter);

const PORT = process.env.PORT || 5000;
connectDb();

app.listen(PORT, ()=>{
console.log(`server is running on port :${PORT}`)
});
