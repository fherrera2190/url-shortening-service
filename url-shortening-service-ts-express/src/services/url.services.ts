import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const findAll = async (req: Request, res: Response) => {
  try {
    const urls = await prisma.url.findMany({});
  } catch (error) {
    console.log(error);
  }
};

const create = async (req: Request, res: Response) => {

};
