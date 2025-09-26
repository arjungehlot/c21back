import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();

const port = process.env.PORT || 8000;


import userrouters from "./routes/user.routes.js";
import taskrouters from "./routes/task.route.js";
import adminrouters from "./routes/admin.route.js";

app.use("/api/v1/users", userrouters);
app.use("/api/v1/tasks", taskrouters);
app.use("/api/v1/admin", adminrouters);

// app.use(errorHandler);

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
