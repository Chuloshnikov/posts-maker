import connectDB from '../config/db.js';
import Job from "../models/job.model.js";

connectDB();

export const createJobPost = async (req, res) => {
    try {
        const job = req.body;

        const jobDoc = {
            ...job
        };

        const jobPost = await Job.create(jobDoc);

        return res.status(201).json(jobPost);
    } catch(err) {
        res.status(400).json({ message: 'Failed to create the job post' }, err.message)
    }
}