import { Router } from "express";

const router = Router();

/**
 * MEDIA
 */
router.get("/media", (req, res) => {
  res.json({ message: "media" });
});

router.get("/media/:id", (req, res) => {});

router.post("/media", (req, res) => {});

router.put("/media/:id", (req, res) => {});

router.delete("/media/:id", (req, res) => {});

/**
 * EPISODE
 */

router.get("/episode", (req, res) => {});

router.get("/episode/:id", (req, res) => {});

router.post("/episode", (req, res) => {});

router.put("/episode/:id", (req, res) => {});

router.delete("/episode/:id", (req, res) => {});

export default router;
