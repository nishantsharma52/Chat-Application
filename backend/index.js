import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js"
const app = express();

const PORT = process.env.PORT || 5000

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/user",userRoute)
app.use("/api/v1/message", messageRoute)




dotenv.config({
    path: ".env"
})
databaseConnection();
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
   