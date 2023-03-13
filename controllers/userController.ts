import { Request, Response } from "express";
import prisma from "../utils/prisma";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        username: req.body.username,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        email: req.body.email,
        username: req.body.username,
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
};
