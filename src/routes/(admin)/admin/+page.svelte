<script lang="ts">
	import { getUser, signout } from '$lib/api/auth.remote';
	const user = await getUser();
</script>

<h1>{user.id}</h1>
<h1>{user.name}</h1>
<h1>{user.email}</h1>
<h1>{user.emailVerified}</h1>
<h1>{user.image}</h1>
<img src={user.image} alt={user.name} />
<h1>{user.createdAt}</h1>
<h1>{user.updatedAt}</h1>
<form {...signout}>
	<button type="submit">Sign Out</button>
</form>
