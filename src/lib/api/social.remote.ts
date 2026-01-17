import { form, getRequestEvent } from '$app/server';
import { auth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
export const signInWithGoogle = form(async () => {
	const { request } = getRequestEvent();
	const origin = request.headers.get('origin');
	const data = await auth.api.signInSocial({
		body: { provider: 'google', callbackURL: `${origin}/admin` },
		headers: request.headers
	});
	redirect(302, data.url as string);
});

export const signInWithGitHub = form(async () => {
	const { request } = getRequestEvent();
	const origin = request.headers.get('origin');
	const data = await auth.api.signInSocial({
		body: { provider: 'github', callbackURL: `${origin}/admin` },
		headers: request.headers
	});
	redirect(302, data.url as string);
});
