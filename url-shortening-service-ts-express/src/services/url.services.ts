import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

const findByShortCode = async (findShortCode: string) => {
  const urls = await prisma.url.findFirst({
    where: {
      shortCode: findShortCode,
    },
  });

  if (!urls) throw { message: "Short code not found", statusCode: 404 };
  return urls;
};

const create = async (url: string) => {
  const result = await prisma.url.create({
    data: {
      url,
      shortCode: crypto.randomBytes(4).toString("hex"),
      accessCount: 0,
    },
  });
  return result;
};

export const urlServices = {
  findByShortCode,
  create,
};
