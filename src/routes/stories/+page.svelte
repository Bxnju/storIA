<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { writable } from 'svelte/store';

	// Crear un store para almacenar los personajes
	const stories = writable([]);

	let token = localStorage.getItem('authUser'); // Make sure to get the correct authentication token

	async function fetchStories() {
		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.get('http://127.0.0.1:3000/api/v1/all_story', {
				headers: {
					Authorization: `Bearer ${authUser}`
				}
			});

			stories.set(response.data);
		} catch (error) {
			console.error('Error fetching characters:', error);
		}
	}

	onMount(() => {
		fetchStories();
	});

	const viewStory = (id) => {
		window.location.href = `/stories/seeStory?id=${id}`;
	};
</script>

<svelte:head>
	<title>StorIA | Stories</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="page-title">Stories</h1>
	<a class="buttonAddStory" href="/stories/createStory">Create new story</a>
	<div class="stories-list">
		{#if !$stories}
			<h1>Loading stories...</h1>
		{:else if $stories.length === 0}
			<p class="no_stories">No stories found</p>
		{:else}
			{#each $stories as story}
				<div class="story-card" on:click={() => viewStory(story.id)}>
					<h2>Title: {story.title}</h2>
					<p>{story.content.substring(0, 100)}...</p>
					<p>
						By
						{story.user.name}
						{story.user.last_name}
					</p>
					<p>
						{story.reviews.length == 0 ? 'Not reviews yet' : story.reviews.length + ' reviews'}
					</p>
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
	.stories-list {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	.story-card {
		background: linear-gradient(145deg, rgb(0, 76, 114), rgba(5, 48, 7, 0.51));
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
	.story-card:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
	}
	.story-card h2 {
		padding: 0.5em 1em;
		margin: auto;
		color: var(--white);
		margin-bottom: 1em;
		border-radius: 2em;
		font-family: var(--chakra);
		font-size: calc(100% + 0.5vw);
		text-align: center;
	}

	.story-card p {
		margin: 0;
		font-family: var(--raleway);
		text-align: justify;
	}

	.no_stories {
		font-size: 1.5em;
		font-family: var(--chakra);
		color: var(--green);
		width: 100%;
		text-align: center;
		font-weight: bold;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}

	.buttonAddStory {
		position: absolute;
		right: 3em;
		text-decoration: none;
		font-weight: bold;
		border-radius: 2em;
		top: 20%;
		font-family: var(--chakra);
		padding: 1em 2em;
		background: linear-gradient(145deg, rgb(0, 76, 114), rgba(5, 48, 7, 0.51));
		color: var(--white);
		transition: 0.7s;
		animation:
			fadeInLeft 1s ease-in-out,
			pulse 1s infinite ease;
	}

	.buttonAddStory:hover {
		transform: scale(1.05);
	}
</style>
