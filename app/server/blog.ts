import { prisma } from "~/db.server";

export const getArticles = async () => {
  const articles = await prisma.post.findMany();
  return articles;
};
