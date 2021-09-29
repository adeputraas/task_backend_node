import { Router } from "express";
import { MovieController } from "./controller.movie";

const router = Router();
const controller = new MovieController();

router.get("/", controller.getMovieById);

export default router;
