import { Router } from "express";
import movieRoutes from "./movie.route.js";

const router = Router();

router.get("/", async (req,res) => {
  // res.send("<h1>Hello World</h1>") // ssr
  res.json({
    name: "didicode",  // csr
    age: 14
  })
  console.log("yooo")
})

//loalhost:3000/
router.use("/movies", movieRoutes);//loalhost:3000/movies

export default router;
