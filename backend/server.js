const express = require("express");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config();

const chats = require("./data/data");
const connectDB = require("./config/db");

connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.use("/api/user", userRoutes);
// app.use("/api/chat", chatRoutes);
// app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Sever is started on Port: http://localhost:${PORT}`);
});