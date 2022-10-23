import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import donarRoute from "./routes/donar.js"
import campRoute from "./routes/camp.js"
import ngosRoute from "./routes/ngo.js";
// import authRoute from "./routes/auth.js";


//App config
const app = express();
dotenv.config();

// app settings
app.set('view engine', 'ejs');

//DB config
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb");
    } catch (error) {
        console.log(error)
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("MongDB Disconnected");
});

// middleware
app.use(express.json());
app.use(cors());
/*app.use("/api/donar", donarRoute);
app.use("/api/camp", campRoute);
app.use("/api/ngo", ngosRoute);*/
app.use("/", (req, res) => {
    res.status(200).render('home.ejs')
})
// app.use("/api/auth", authRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something else"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


// App listern
app.listen(process.env.PORT || 8800, async () => {
    await connect();
    console.log("connected to backend");
});