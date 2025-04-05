import express from "express";
import  { config } from "dotenv";
import cors from "cors"
import { connectDb } from "./config/connectDb.js";
import userRoute from "./routes/auth.js";
config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userRoute);

const PORT = process.env.PORT || 5000;
connectDb();

app.listen(PORT, ()=>{
console.log(`server is running on port :${PORT}`)
});
