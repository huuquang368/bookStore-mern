import express from "express";
import mongoose from "mongoose";
import { PORT, mongoDBURL } from "./config.js";
import { Book } from "./models/book.js";
import bookRoutes from "./routes/book.js";
import cors from "cors";

const app = express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handle CORS policy
// Option 1: Allow all Origins with default cors (*)
app.use(cors());
// Option 2: Allow custom Origins
// app.use(
//   cors({
//     origin: "http://localhost:5555",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: "Content-Type",
//   })
// );

app.get("/", (req, res) => {
  return res.status(200).send("Hello");
});

app.use("/books", bookRoutes);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to mongoose database");
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
