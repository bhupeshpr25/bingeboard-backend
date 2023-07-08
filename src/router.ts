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
import {
  createNote,
  deleteNote,
  getNotes,
  getOneNote,
  updateNote,
} from "./handlers/note";

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

router.get("/note", getNotes);

router.get("/note/:id", getOneNote);

router.post(
  "/note",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("season").optional(),
  body("episode").optional(),
  body("timestampHr").optional(),
  body("timestampMin").optional(),
  body("timestampSec").optional(),
  body("tag").optional(),
  body("mediaId").exists().isString(),
  createNote
);

router.put(
  "/note/:id",
  body("title").optional(),
  body("body").optional(),
  body("season").optional(),
  body("episode").optional(),
  body("timestampHr").optional(),
  body("timestampMin").optional(),
  body("timestampSec").optional(),
  body("tag").optional(),
  updateNote
);

router.delete("/note/:id", deleteNote);

router.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: "error in router handler" });
});

export default router;
