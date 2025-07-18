import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3001",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Routes
app.use("/api", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Users API is running");
});

export default app;
