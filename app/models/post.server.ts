import { User, Post } from "@prisma/client";

import { prisma } from "~/db.server";

export function getPostsByUserId({ userId }: { userId: User["id"] }) {
  return prisma.post.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

// get posts support pagination
export function getPosts({
  skip = 0,
  take = 10,
}: {
  skip?: number;
  take?: number;
}) {
  return prisma.post.findMany({
    skip,
    take,
    orderBy: { updatedAt: "desc" },
  });
}

// create a post
export function createPost({
  body,
  title,
  overview,
  slug,
  userId,
}: Pick<Post, "body" | "title" | "overview" | "slug"> & {
  userId: User["id"];
}) {
  return prisma.post.create({
    data: {
      title,
      body,
      overview,
      slug,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}


