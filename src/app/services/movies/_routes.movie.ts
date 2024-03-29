import { Router } from "express";
import { MovieController } from "./controller.movie";

const router = Router();
const controller = new MovieController();

router.get("/search", controller.getMovieById);
router.get("/detail", controller.getMovieByTitle);

export default router;
