<script lang="ts">
	import { signin } from '$lib/api/auth.remote';
	import { signInWithGoogle, signInWithGitHub } from '$lib/api/social.remote';
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
</script>

<div>
	<h1>signin</h1>
	<form {...signin} use:enhance>
		<label for="email"
			>Email
			<input {...signin.fields.email.as('email')} />
			{#each signin.fields.email.issues() ?? [] as issue (issue.message)}
				<p class="error">{issue.message}</p>
			{/each}
		</label>
		<label for="password"
			>Password
			<input {...signin.fields.password.as('password')} />
			{#each signin.fields.password.issues() ?? [] as issue (issue.message)}
				<p class="error">{issue.message}</p>
			{/each}
		</label>
		<button type="submit">signin</button>
		<p>
			don't have an account? <a href={resolve('/signup')}>Sign up</a>
		</p>
		<button {...signInWithGitHub.buttonProps}>sign in with GitHub</button>
		<button {...signInWithGoogle.buttonProps}>sign in with Google</button>
	</form>

	<div class="divider">
		<span>Or continue with</span>
	</div>
</div>
