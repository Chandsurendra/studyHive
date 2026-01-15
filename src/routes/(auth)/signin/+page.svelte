<script lang="ts">
  import { signin } from "$lib/api/auth.remote";
  import { signInWithGoogle, signInWithGitHub } from "$lib/api/social.remote";
</script>

<div>
  <h1>signin</h1>
  <form {...signin}>
    <label for="email"
      >Email
      <input {...signin.fields.email.as("email")} />
      {#each signin.fields.email.issues() ?? [] as issue}
        <p class="error">{issue.message}</p>
      {/each}
    </label>
    <label for="password"
      >Password
      <input {...signin.fields.password.as("password")} />
      {#each signin.fields.password.issues() ?? [] as issue}
        <p class="error">{issue.message}</p>
      {/each}
    </label>
    <button type="submit">signin</button>
    <p>don't have an account? <a href="/signup">Sign up</a></p>
  </form>
</div>
