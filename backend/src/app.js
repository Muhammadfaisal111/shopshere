import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";

const app = express();

// security middleware
app.use(helmet());

// rate limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// middlewares
app.use(cors({
  origin: true,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// test route
app.get("/", (req, res) => {
  res.json({ message: "ShopSphere API Running 🚀" });
});

export default app;