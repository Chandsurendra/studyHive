import * as v from 'valibot';

export const signupSchema = v.object({
	name: v.pipe(v.string(), v.minLength(2), v.maxLength(100)),
	email: v.pipe(v.string(), v.email()),
	password: v.pipe(v.string(), v.minLength(8))
});

export const signinSchema = v.object({
	email: v.pipe(v.string(), v.email()),
	password: v.pipe(v.string(), v.minLength(8))
});
