<script lang="ts">
import {  signup } from "$lib/api/auth.remote";
</script>

<div>
  <h1>signup</h1>
  <form {...signup}>
    <label for="name">Name
    <input {...signup.fields.name.as("text")} />
    {#each signup.fields.name.issues() ?? [] as issue}
      <p class="error">{issue.message}</p>
    {/each}
    </label>
    <label for="email">Email
      <input {...signup.fields.email.as("email")} />
      {#each signup.fields.email.issues() ?? [] as issue}
        <p class="error">{issue.message}</p>
      {/each}
    </label>
    <label for="password">Password
      <input {...signup.fields.password.as("password")} />
      {#each signup.fields.password.issues() ?? [] as issue}
        <p class="error">{issue.message}</p>
      {/each}
    </label>
    <button type="submit">Signup</button>
  </form>
</div>