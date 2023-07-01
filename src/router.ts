import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createMedia,
  deleteMedia,
  getMedia,
  getOneMedia,
  updateMedia,
} from "./handlers/media";

const router = Router();

/**
 * MEDIA
 */
router.get("/media", getMedia);

router.get("/media/:id", getOneMedia);

router.post("/media", body("title").isString(), handleInputErrors, createMedia);

router.put(
  "/media/:id",
  body("title").isString(),
  handleInputErrors,
  updateMedia
);

router.delete("/media/:id", deleteMedia);

/**
 * NOTE
 */

router.get("/note", (req, res) => {});

router.get("/note/:id", (req, res) => {});

router.post(
  "/note",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("season").optional(),
  body("episode").optional(),
  body("timestamp").optional(),
  body("tag").optional(),
  body("mediaId").exists().isString(),
  handleInputErrors,
  (req, res) => {}
);

router.put(
  "/note/:id",
  body("title").optional(),
  body("body").optional(),
  body("season").optional(),
  body("episode").optional(),
  body("timestamp").optional(),
  body("tag").optional(),
  (req, res) => {}
);

router.delete("/note/:id", (req, res) => {});

export default router;
