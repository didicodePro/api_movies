import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from "../controllers/movie.controller.js";

const router = Router();

//loalhost:3000/movies/
router.get("/", getAllMovies);
router.post("/", createMovie);
router.patch("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
