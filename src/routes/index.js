import { Router } from "express";
import movieRoutes from "./movie.route.js";
import commentRoutes from "./comment.route.js"


const router = Router();

//loalhost:3000/
router.use("/movies", movieRoutes);//loalhost:3000/movies
router.use("/comments", commentRoutes);
export default router;
