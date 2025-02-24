import express from "express";
import { createJobPost } from "../controllers/jobController.js";





const router = express.Router();

router.post('/jobs', createJobPost);


export default router;