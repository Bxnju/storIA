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
	{#each $stories as story}
		<div class="card" on:click={() => viewStory(story.id)}>
			<h2>{story.title}</h2>
			Author ID: {story.user_id}
			<p>Preview: {story.content.slice(0, 100)}...</p>
			Number of Reviews:{story.reviews.length}
		</div>
	{/each}
{/if}

<style>
	/* Estilos para el contenedor principal */
	.text-column {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 2rem;
	}

	/* Estilos para las tarjetas de las historias */
	.card {
		background-color: #f9f9f9;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 1.5rem;
		margin-bottom: 1rem;
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
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
		color: #333;
	}

	.card p {
		color: #666;
	}

	/* Estilos para el mensaje de "No stories found" */
	.no_stories {
		font-size: 1.2rem;
		color: #666;
	}

	/* Animación de fade in */
	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
