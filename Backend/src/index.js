import express from "express";
import "dotenv/config"
import authRoutes from "./Routes/authRoutes.js"
import { connectDb } from "./lib/db.js";

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {

    console.log(`Server Is Running on port ${PORT}`)
    connectDb()
    
})