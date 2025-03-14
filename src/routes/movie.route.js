import {Router} from "express"
import Movie from "../models/movie.model.js";

const router = Router();

//loalhost:3000/movies/

router.get("/", async (req,res) => {
  const movies = await Movie.find();
  res.json(movies);
})

export default router;