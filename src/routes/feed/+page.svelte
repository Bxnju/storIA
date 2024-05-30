<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';

	// Crear un store para almacenar las historias
	const stories = writable([]);

	// Función para obtener las historias desde el backend
	async function fetchStories() {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.get('http://127.0.0.1:3000/api/v1/feed', {
				headers: {
					Authorization: `Bearer ${authUser}`
				}
			});

			stories.set(response.data);
		} catch (error) {
			console.error('Error fetching stories:', error);
		}
	}

	// Obtener las historias cuando el componente se monta
	onMount(() => {
		fetchStories();
	});

	const viewStory = (id) => {
		window.location.href = `/stories/seeStory?id=${id}`;
	};
</script>

<svelte:head>
	<title>StorIA | Feed</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="page-title">Feed</h1>
</div>

<!-- Componente para renderizar las historias -->
{#if $stories.length === 0}
	<p class="no_stories">No stories found</p>
{:else}
	<div class="cards">
		{#each $stories as story}
			<div class="card" on:click={() => viewStory(story.id)}>
				<h2>Title: {story.title}</h2>
				<p>{story.reviews.length == 0 ? 'Not reviews yet' : story.reviews.length + ' reviews'}</p>
			</div>
		{/each}
	</div>
{/if}

<style>
	.cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: 2em;
	}

	/* Estilos para las tarjetas de las historias */
	.card {
		background: linear-gradient(145deg, rgb(0, 76, 114), rgba(5, 48, 7, 0.51));
		border-radius: 2em;
		min-width: 30%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1.5rem;
		transition:
			transform 0.3s ease-in-out,
			box-shadow 0.3s ease-in-out;
		cursor: pointer;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.card h2 {
		text-align: center;
		font-size: 1.5rem;
		margin-bottom: 1em;
		font-family: var(--chakra);
		color: var(--white);
	}

	.card p {
		color: var(--white);
		font-weight: bold;
	}

	.no_stories {
		font-size: 1.5em;
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}
</style>
