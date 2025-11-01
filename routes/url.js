import { Router } from "express";
import { generateShortUrl } from "../controllers/url.js";

const urlRouter=Router();


urlRouter.post("/shorten",generateShortUrl);

export default urlRouter;