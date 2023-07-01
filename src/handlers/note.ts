import prisma from "../db";
import { body } from "express-validator";

export const getNotes = async (req, res) => {
  const media = await prisma.media.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      notes: true,
    },
  });
  const notes = media.reduce((allNotes, media) => {
    return [...allNotes, ...media.notes];
  }, []);

  res.json({ data: notes });
};

export const getOneNote = async (req, res) => {
  const note = await prisma.note.findUnique({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: note });
};

export const createNote = async (req, res) => {
  const media = await prisma.media.findUnique({
    where: {
      id: req.body.mediaId,
    },
  });

  if (!media) {
    //media does not belong to user
    res.json({ message: "nope" });
  }

  const note = await prisma.note.create({
    data: req.body,
  });

  res.json({ data: note });
};

export const updateNote = async (req, res) => {
  const media = await prisma.media.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      notes: true,
    },
  });

  const notes = media.reduce((allNotes, media) => {
    return [...allNotes, ...media.notes];
  }, []);

  const match = notes.find((note) => note.id === req.params.id);

  if (!match) {
    res.json({ message: "nope" });
  }

  const updatedNote = await prisma.note.update({
    where: {
      id: req.params.id,
    },
    data: req.body,
  });

  res.json({ data: updatedNote });
};

export const deleteNote = async (req, res) => {
  const media = await prisma.media.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      notes: true,
    },
  });

  const notes = media.reduce((allNotes, media) => {
    return [...allNotes, ...media.notes];
  }, []);

  const match = notes.find((note) => note.id === req.params.id);

  if (!match) {
    res.json({ message: "nope" });
  }

  const deletedNote = await prisma.note.delete({
    where: {
      id: req.params.id,
    },
  });

  res.json({ data: deletedNote });
};
