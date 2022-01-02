import express from "express";
import { getMovieTrailer } from "../controllers/trailerController.js";
const router = express.Router();

router.post("/", getMovieTrailer);

export default router;
