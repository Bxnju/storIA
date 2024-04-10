<script>
	import axios from 'axios';
	import { onMount } from 'svelte';
	import world from '$lib/images/planet-1.png';

	let num_stories = 0;
	let num_users = 0;
	let num_characters = 0;

	function formatNumber(number) {
		if (number >= 1000000) {
			return (number / 1000000).toFixed(1) + 'M';
		} else if (number >= 1000) {
			return (number / 1000).toFixed(1) + 'k';
		} else {
			return number.toString();
		}
	}

	async function getNumbers() {
		try {
			const response = await axios.get('http://127.0.0.1:3000/api/v1/global_numbers/', {});
			num_stories = response.data.num_stories;
			num_users = response.data.num_users;
			num_characters = response.data.num_characters;
			console.log('Respuesta del backend:', response.data);
			console.log('Respuesta del backend:', response.data.num_characters);
		} catch (error) {
			console.error('Error al enviar la petición:', error.message);
		}
	}

	onMount(async () => {
		console.log(localStorage.getItem('authToken'));
		await getNumbers();
		animateNumbers();
	});

	function animateNumbers() {
		const numbers = document.querySelectorAll('.animated-number');
		numbers.forEach((number) => {
			const value = parseInt(number.getAttribute('data-value'));
			const duration = 1000; // Duración de la animación en milisegundos
			const startTime = performance.now();

			function updateNumber(timestamp) {
				const elapsedTime = timestamp - startTime;
				const progress = elapsedTime / duration;

				if (progress < 1) {
					const newValue = Math.floor(progress * value);
					number.textContent = formatNumber(newValue);
					requestAnimationFrame(updateNumber);
				} else {
					number.textContent = formatNumber(value);
				}
			}

			requestAnimationFrame(updateNumber);
		});
	}
</script>

<svelte:head>
	<title>StorIA | Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<img src={world} alt="Welcome" />
</section>

{#if localStorage.getItem('authToken') != null}
	{alert('You are logged in')}
{/if}
<section class="global_variables">
	<h1>Some of our best goals of 2024</h1>
	<div class="goals">
		<div class="goal">
			<h2 class="animated-number" data-value={num_stories}></h2>
			<h4>Stories</h4>
		</div>
		<div class="goal">
			<h2 class="animated-number" data-value={num_users}></h2>
			<h4>Users</h4>
		</div>
		<div class="goal">
			<h2 class="animated-number" data-value={num_characters}></h2>
			<h4>Characters</h4>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4em 0 0 0;
	}

	section > img {
		width: 30%;
		animation:
			fadeInTop 1s ease-in,
			float 5s infinite ease-in-out;
	}

	section h1 {
		font-size: 3em;
		background: linear-gradient(to left, var(--m-green), var(--green));
		-webkit-background-clip: text;
		background-clip: text;
		background-position: left;
		background-size: 400%;
		text-align: center;
		color: transparent;
		font-family: var(--chakra);
		animation: change-bg-position 4s infinite ease-in-out;
		transition: 0.6s ease;
		border-bottom: 5px solid var(--m-green);
	}

	.global_variables h1 {
		font-size: 3em;
		background: linear-gradient(to left, var(--l-green), var(--green));
		-webkit-background-clip: text;
		background-clip: text;
		background-position: left;
		background-size: 400%;
		text-align: center;
		color: transparent;
		font-family: var(--chakra);
		animation: change-bg-position 4s infinite ease-in-out;
		transition: 0.6s ease;
		margin-bottom: 1em;
		border: none;
	}

	.global_variables .goals {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 3em;
	}

	.global_variables .goals .goal {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.global_variables .goals .goal h2 {
		font-size: 3em;
		font-family: var(--chakra);
		color: var(--l-green);
	}

	.global_variables .goals .goal h4 {
		font-size: 1.5em;
		font-family: var(--raleway);
		color: var(--white);
	}

	.animated-number {
		animation: fadeInUp 1s ease-in-out;
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes change-bg-position {
		0%,
		100% {
			background-position: left;
		}
		50% {
			background-position: right;
		}
	}
</style>
