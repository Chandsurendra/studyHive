<script lang="ts">
	import { signup } from '$lib/api/auth.remote';
	import { signInWithGoogle, signInWithGitHub } from '$lib/api/social.remote';
	import { resolve } from '$app/paths';
</script>

<div>
	<h1>signup</h1>
	<form {...signup}>
		<label
			>Name
			<input {...signup.fields.name.as('text')} />
			{#each signup.fields.name.issues() ?? [] as issue (issue.message)}
				<p class="error">{issue.message}</p>
			{/each}
		</label>
		<label
			>Email
			<input {...signup.fields.email.as('email')} />
			{#each signup.fields.email.issues() ?? [] as issue (issue.message)}
				<p class="error">{issue.message}</p>
			{/each}
		</label>
		<label
			>Password
			<input {...signup.fields.password.as('password')} />
			{#each signup.fields.password.issues() ?? [] as issue (issue.message)}
				<p class="error">{issue.message}</p>
			{/each}
		</label>
		<button type="submit">Signup</button>
		<p>
			already have an account? <a href={resolve('/signin')}>Sign in</a>
		</p>
		<div class="divider">
			<span>Or continue with</span>
		</div>
		<button {...signInWithGitHub.buttonProps}>sign in with GitHub</button>
		<button {...signInWithGoogle.buttonProps}>sign in with Google</button>
	</form>
</div>
