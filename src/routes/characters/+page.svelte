<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';

	// Crear un store para almacenar los personajes
	const characters = writable([]);

	// Función para obtener los personajes desde el backend
	async function fetchCharacters() {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.get('http://127.0.0.1:3000/api/v1/all_characters', {
				headers: {
					Authorization: `Bearer ${authUser}`
				}
			});

			characters.set(response.data);
		} catch (error) {
			console.error('Error fetching characters:', error);
		}
	}

	// Obtener los personajes cuando el componente se monta
	onMount(() => {
		fetchCharacters();
	});

	const viewCharacter = (id) => {
		window.location.href = `/characters/seeCharacter?id=${id}`;
	};
</script>

<svelte:head>
	<title>StorIA | Characters</title>
	<meta name="description" content="List of Characters" />
</svelte:head>

<div class="text-column">
	<h1 class="page-title">Characters</h1>
	<a class="button_addCharacter" href="/characters/createCharacter">Create new character</a>
	<div class="characters-list">
		{#if !$characters}
			<h1>Loading characters...</h1>
		{:else if $characters.length === 0}
			<p class="no_characters">No characters found</p>
		{:else}
			{#each $characters as character}
				<div class="character-card" on:click={() => viewCharacter(character.id)}>
					<h2>{character.name}</h2>
					<p>{character.description.substring(0, 100)}...</p>
					<p>Created At: {new Date(character.created_at).toLocaleDateString()}</p>
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.page-title {
		font-size: var(--page-title-font-size);
		font-family: var(--chakra);
		color: var(--white);
		font-weight: bold;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}
	.characters-list {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.character-card {
		background-color: rgba(21, 84, 24, 0.486); /* Dark green */
		color: #fff;
		padding: 1rem;
		border-radius: 8px;
		cursor: pointer;
		width: 300px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}
	.character-card:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
	.character-card h2 {
		padding: 0.5em 1em;
		margin: auto;
		background-color: var(--d-green);
		color: var(--white);
		margin-bottom: 1em;
		border-radius: 2em;
		font-family: var(--chakra);
		font-size: calc(100% + 0.5vw);
	}

	.character-card p {
		margin: 0;
		font-family: var(--raleway);
		text-align: justify;
	}

	.no_characters {
		width: 100%;
		font-size: 1.5em;
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		text-align: center;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}

	.button_addCharacter {
		position: absolute;
		right: 3em;
		text-decoration: none;
		font-weight: bold;
		border-radius: 2em;
		top: 20%;
		font-family: var(--chakra);
		padding: 1em 2em;
		background: var(--m-green);
		color: var(--white);
		transition: 0.7s;
		animation:
			fadeInLeft 1s ease-in-out,
			pulse 1s infinite ease;
	}

	.button_addCharacter:hover {
		transform: scale(1.05);
	}
</style>
