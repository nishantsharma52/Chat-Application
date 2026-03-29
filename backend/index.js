import express from "express"
import dotenv from "dotenv"
import userRoute from "./routes/userRoute.js"
import databaseConnection from "./config/database.js";
const app = express();

const PORT = process.env.PORT || 5000

//middleware
app.use(express.json());

//routes
app.use("/api/v1/user",userRoute)
// http://localhost:8080/api/v1/user/register


dotenv.config({
    path: ".env"
})
databaseConnection();
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
   