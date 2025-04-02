import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
    res.send("Backend up and running!");
});

export default router;