import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import trailerRoute from "./routes/trailerRoute.js";

dotenv.config();

const app = express();

// Let us to receive JSON in body
app.use(express.json());
// Routes
app.use("/api/trailer", trailerRoute);
// Error Handlers Middleware
app.use(notFound);
app.use(errorHandler);

export default app;

//app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
