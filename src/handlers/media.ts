import prisma from "../db";
import { body } from "express-validator";

//get all media
export const getMedia = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      media: true,
    },
  });

  res.json({ data: user.media });
};

//get one media
export const getOneMedia = async (req, res) => {
  const id = req.params.id;

  const media = await prisma.media.findFirst({
    where: {
      id,
      userId: req.user.id,
    },
  });

  res.json({ data: media });
};

// create media
export const createMedia = async (req, res, next) => {
  try {
    const media = await prisma.media.create({
      data: {
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        userId: req.user.id,
      },
    });
    res.json({ data: media });
  } catch (error) {
    next(error);
  }
};

//update media
export const updateMedia = async (req, res) => {
  const updated = await prisma.media.update({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id,
      },
    },
    data: {
      title: req.body.title,
      type: req.body.type,
      description: req.body.description,
    },
  });

  res.json({ data: updated });
};

// delete list
export const deleteMedia = async (req, res) => {
  const deleted = await prisma.media.delete({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};
