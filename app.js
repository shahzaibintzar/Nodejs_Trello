const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser");
require("dotenv").config();
const authenticateUser = require("./src/middleware/authenticateUser");
const { connectToMongoDB } = require("./src/connect");

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());

const taskRoutes = require('./src/routes/taskRoutes')
const authRoutes = require('./src/routes/authRoute');

app.use("/api/tasks", authenticateUser,taskRoutes);
app.use("/auth/", authRoutes);


connectToMongoDB(process.env.CONNECTION_STRING)
const db = mongoose.connection;

db.on("error", (error) => {
    console.log("Mongodb error : ", error);
});

db.once("open", () => {
    console.log("Mongodb connected sucessfully!");
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`server is running on ${port} port`);
    });
});
