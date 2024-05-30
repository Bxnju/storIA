<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { format } from 'date-fns';

	let storyResponse = null;
	let storyID = null;
	let errorMessage = '';
	let content = '';

	async function handleSubmit() {
		errorMessage = '';

		try {
			const authUser = localStorage.getItem('authUser');
			if (!authUser) {
				console.error('Auth token not found in localStorage');
				return;
			}

			const response = await axios.post(
				`http://127.0.0.1:3000/api/v1/create_review?story_id=${storyID}`,
				{
					review: {
						content
					}
				},
				{
					headers: {
						Authorization: `Bearer ${authUser}`
					}
				}
			);
			console.log('Respuesta del backend:', response.data);

			errorMessage = '✔ Your review has been added!';
			await fetchStory();
		} catch (error) {
			console.error('There was an error trying to send the request for review:', error.message);

			if (error.response && error.response.status === 401) {
				errorMessage = '🚩 There is an error trying to send the review';
			} else {
				errorMessage = '🚩 An error occurred. Please try again later.';
			}
		}
	}

	const isNavigator = () => typeof window !== 'undefined';

	onMount(() => {
		if (isNavigator()) {
			let params = new URLSearchParams(window.location.search);
			storyID = params.get('id');
			fetchStory();
		}
		errorMessage = '';
		content = '';
	});

	const fetchStory = async () => {
		try {
			let response = await fetch(`http://127.0.0.1:3000/api/v1/story?id=${storyID}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('authUser')}`
				}
			});
			if (response.ok) {
				storyResponse = await response.json();
				console.log(storyResponse);
			} else {
				console.error('Error trying to obtain the data from the DB');
			}
		} catch (error) {
			console.error('Error while connecting with the API', error);
		}
	};
</script>

{#if storyResponse}
	<div>
		<div class="text-column">
			<div class="story-content">
				<h1>Title: {storyResponse.story.title}</h1>
				<p style="font-wight: bold; margin: 1em 0; font-family: var(--chakra);">
					By {storyResponse.story.user.name}
					{storyResponse.story.user.last_name}
				</p>
				<p>{storyResponse.story.content}</p>
				<p>Created At: {new Date(storyResponse.story.created_at).toLocaleDateString()}</p>
				<h1>Reviews</h1>
				<form on:submit|preventDefault={handleSubmit}>
					<div class="form_elements">
						<h3>Let a comment for this story</h3>
						<textarea autocapitalize="sentences" bind:value={content} name="" id=""></textarea>

						<button type="submit">Send comment!</button>
					</div>

					{#if errorMessage}
						<p class="error-message">{errorMessage}</p>
					{/if}
				</form>
				{#if storyResponse.reviews.length > 0}
					<div class="reviews">
						{#each storyResponse.reviews as review}
							<div class="review">
								<h2>{review.review}</h2>
								<h4>By {review.user.name} {review.user.last_name}</h4>
								<h4 style="font-size: 0.8em;">
									Created at {format(new Date(review.created_at), 'dd/MM/yyyy HH:mm')}
								</h4>
							</div>
						{/each}
					</div>
				{:else}
					<p class="no_reviews">No reviews yet</p>
				{/if}
			</div>
		</div>
	</div>
{:else}
	<p class="loading-story">Loading Story...</p>
{/if}

<style>
	.text-column {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.story-content {
		max-width: 900px;
		padding: 3em 4em 4em 4em;
		background: linear-gradient(145deg, rgb(0, 76, 114), rgba(5, 48, 7, 0.51));
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		text-align: left;
	}

	.story-content h1 {
		font-size: 2.5rem;
		margin-bottom: 1.5em;
		color: var(--white);
		font-family: var(--chakra);
		font-weight: bold;
	}

	.story-content p {
		font-size: 1.2em;
		margin-bottom: 8px;
		color: var(--white);
		font-family: var(--raleway);
		text-align: justify;
	}

	/* Animación de carga */
	@keyframes pulse {
		0% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.6;
		}
	}

	.loading-story {
		font-size: 1.2rem;
		color: var(--white);
		animation: pulse 1.5s infinite;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2em;
	}

	.form_elements {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1em;
		padding: 1em;
		background: var(--d-green);
		border-radius: 2em;
	}

	.form_elements h3 {
		font-size: 1em;
		text-align: center;
		font-family: var(--chakra);
		color: var(--white);
	}

	.form_elements textarea {
		min-width: 65%;
		min-height: 4em;
		height: auto;
		border-radius: 0.5em;
		padding: 1em;
		color: var(--l-green);
		background: rgba(14, 92, 18, 0.51);
		border: none;
		font-weight: bold;
		box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.7);
		font-size: 1.1em;
		font-family: var(--raleway);
	}

	.form_elements textarea:focus {
		outline: none;
	}

	.form_elements textarea::-webkit-scrollbar {
		-webkit-appearance: none;
	}

	.form_elements textarea::-webkit-scrollbar:vertical {
		width: 8px;
		background: var(--d-green);
	}

	.form_elements textarea::-webkit-scrollbar-thumb {
		background-color: var(--m-green);
		border-radius: 10px;
	}

	.form_elements button {
		padding: 0.5em 1em;
		border-radius: 1em;
		background-color: var(--m-green);
		color: var(--white);
		font-family: var(--chakra);
		font-size: 1.2em;
		cursor: pointer;
	}

	.reviews {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	div.review {
		background-color: rgba(1, 16, 2, 0.882);
		color: #fff;
		padding: 1rem;
		margin-bottom: 1em;
		border-radius: 1em;
		cursor: default;
		width: 70%;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.review h2 {
		font-size: 1.5em;
	}

	.no_reviews {
		font-size: 2em !important;
		font-family: var(--chakra);
		color: var(--green);
		font-weight: bold;
		margin: 1em 0;
		width: 100% !important;
		text-align: center !important;
		list-style: none;
		animation: fadeIn 0.5s ease-in-out;
	}
</style>
