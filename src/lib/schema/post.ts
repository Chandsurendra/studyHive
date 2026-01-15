import * as v from 'valibot'
export const PostSchema = v.object({
  title: v.pipe(v.string(), v.nonEmpty()),
  slug:  v.pipe(v.string(), v.nonEmpty()),
  content: v.pipe(v.string(), v.nonEmpty(), v.minLength(10))
})