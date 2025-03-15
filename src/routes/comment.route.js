import { Router } from "express";
import { getAllComments } from "../controllers/comment.controller.js";
const router =  Router();

router.get("/", getAllComments)


export default router;