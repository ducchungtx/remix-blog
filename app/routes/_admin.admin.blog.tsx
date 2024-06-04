import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import EmptyScreen from "~/components/Blog/Admin/EmptyScreen";
import { getArticles } from "~/server/blog";
import { isEmpty } from "~/utils/common";

export async function loader() {
  // get list post from database prisma
  const posts = await getArticles();
  return json({
    posts,
  });
}

function AdminBlog() {
  const values = useLoaderData<typeof loader>();
  const { posts } = values;
  return <div>{isEmpty(posts) && <EmptyScreen />}</div>;
}

export default AdminBlog;
