import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Routes
import { userRoutes, ownerRoutes } from "./routes/index.js";


//App config
const app = express();
if (process.env.NODE_ENV !== "production") dotenv.config()

// middleware
app.use(express.json({ type: 'application/json' }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/user", userRoutes);
app.use("/api/owner", ownerRoutes);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something else"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
});


// DB config
async function connectToDB () {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.log(error)
        throw error;
    }
};
mongoose.connection.on("disconnected", () => console.log("MongoDB Disconnected"));

// App listen
app.listen(process.env.PORT, () => {
    connectToDB()
    console.log("connected to backend")
});

