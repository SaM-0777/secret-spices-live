import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";
import CognitoExpress from "cognito-express";

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
// app.use("/api/owner", ownerRoutes);
// app.use("/api/admin", adminRouter);
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

export const cognitoExpress = new CognitoExpress({
    region: process.env.AWSREGION,
    cognitoUserPoolId: process.env.AWSCOGNITOUSERPOOLID,
    tokenUse: "id",
    // tokenExpiration: 3600000
})

// DB config
mongoose.connect(process.env.MONGO, () => {
    app.listen(process.env.PORT, () => {
        // connectToDB()
        console.log("connected")
    })
});
mongoose.connection.on("disconnected", () => console.log("MongoDB Disconnected"));

