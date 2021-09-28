import { Router } from "express";
import movie from "../services/movies/_routes.movie";
const router = Router();

export default{
    movie: router.use('/movies', movie)
}