<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';

	let currentUser = null;

	async function fetchUserData() {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.get('http://127.0.0.1:3000/api/v1/current_user', {
				headers: {
					Authorization: `Bearer ${authUser}`
				}
			});

			currentUser = await response.data;

			console.log('Respuesta del backend:', currentUser);
		} catch (error) {
			console.error('Error fetching user data:', error);
		}
	}

	onMount(() => {
		fetchUserData();
	});
</script>

<svelte:head>
	<title>StorIA | Account</title>
	<meta name="description" content="Account details" />
</svelte:head>

<div class="account-container">
	<h1 class="page-title">Account Details</h1>

	{#if currentUser}
		<div class="user-card">
			<h2 class="user-name">{currentUser.name} {currentUser.last_name}</h2>
			<p><strong>Email:</strong> {currentUser.mail}</p>
			<p><strong>Birth Date:</strong> {new Date(currentUser.birth_date).toLocaleDateString()}</p>
			{#if currentUser.num_phone}
				<p><strong>Phone Number:</strong> {currentUser.num_phone}</p>
			{/if}
			<p>
				<strong>Account Created:</strong>
				{new Date(currentUser.created_at).toLocaleDateString()}
			</p>
		</div>
	{:else}
		<p class="loading_user">Loading user data...</p>
	{/if}

	<a
		class="btn_logout"
		onclick="localStorage.removeItem('authUser'); location.replace('/')"
		href="/">Logout</a
	>
</div>

<style>
	h1 {
		font-size: var(--page-title-font-size);
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		animation: fadeIn 0.5s ease-in-out;
	}

	.account-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2em;
		background-color: rgba(5, 48, 7, 0.51);
		border-radius: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.user-card {
		background-color: rgba(2, 49, 4, 0.861);
		border-radius: 10px;
		padding: 2em;
		width: 100%;
		max-width: 500px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		margin-bottom: 1.5em;
		color: var(--white);
	}

	.user-name {
		font-size: 1.5em;
		font-family: var(--raleway);
		color: var(--dark-green);
		margin-bottom: 1em;
	}

	.user-card p {
		font-size: 1.1em;
		font-family: var(--raleway);
		color: var(--gray);
		margin: 0.5em 0;
	}

	.user-card p strong {
		color: var(--dark-gray);
	}

	.btn_logout {
		background: var(--m-green);
		color: var(--white);
		padding: 0.5em 1em;
		text-decoration: none;
		border-radius: 5px;
		font-family: var(--raleway);
		font-size: 1.5em;
		transition: background 0.2s linear;
		cursor: pointer;
		text-align: center;
	}

	.btn_logout:hover {
		background: var(--green);
	}

	.loading_user {
		width: 100%;
		font-size: 1.5em;
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		text-align: center;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}
</style>
