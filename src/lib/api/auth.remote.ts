import { command, form, getRequestEvent, query } from '$app/server';
import { auth } from '$lib/server/auth';
import { signinSchema, signupSchema } from '$lib/schema/auth';
import { redirect } from '@sveltejs/kit';
// import { socialProviders } from "better-auth";

export const signup = form(signupSchema, async (user) => {
	await auth.api.signUpEmail({ body: user });
	redirect(307, '/');
});

export const signin = form(signinSchema, async (user) => {
	const { request } = getRequestEvent();
	await auth.api.signInEmail({ body: user, headers: request.headers });
	redirect(303, '/');
});

export const signout = form(async () => {
	const { request } = getRequestEvent();
	await auth.api.signOut({ headers: request.headers });
	redirect(303, '/signin');
});

export const getUser = query(async () => {
	const { locals } = getRequestEvent();
	if (!locals.user) {
		redirect(307, '/signin');
	}
	return locals.user;
});

export const socialsignin = command(async () => {
	const { request } = getRequestEvent();
	await auth.api.signInSocial({ body: { provider: 'google' }, headers: request.headers });
});
