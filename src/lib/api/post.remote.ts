import { form, getRequestEvent, query } from "$app/server";
import { PostSchema } from "$lib/schema/post";
import { db } from "$lib/server/db";
import * as table from "$lib/server/db/schema"
import { redirect } from "@sveltejs/kit";
import { error } from "console";
import { eq } from "drizzle-orm";
import * as v from 'valibot'
function reqAuth() {
  const {locals} = getRequestEvent();
  if(!locals.user) {
    redirect(302, '/signin');
  }
  return locals.user
}

export const getPosts = query( async() =>{
  const posts = await db.select().from(table.posts);
  return posts;
})

export const getPost = query(v.string(), async(id) =>{
  const post = await db.select().from(table.posts).where(eq(table.posts.slug, id));
  	if (!post) error(404, 'Not found');
  return post;
})

export const getAuthorPost = query(async () => {
  const user = reqAuth();
  const posts = await db.select().from(table.posts).where(eq(table.posts.authorId, user.id));
  return posts;
})

export const createPost = form(PostSchema, async ({title, content}) => {
  const user = reqAuth();
  		const slug = title.toLowerCase().replace(/ /g, '-');

  await db.insert(table.posts).values({
    title,
    content,
    slug,
    authorId: user.id
  });
  redirect(303, `/posts/${slug}`);
})