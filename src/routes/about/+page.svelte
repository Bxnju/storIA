<svelte:head>
	<title>StorIA | About Us</title>
	<meta name="description" content="About StorIA - Your Creative Writing Companion" />
</svelte:head>

<div class="container">
	<div class="text-column">
		<h1 class="page-title">About Us</h1>

		<!-- Vision Section -->
		<div class="section">
			<h2 class="section-title">Our Vision</h2>
			<p style="font-weight: bold; text-align: center;">
				Welcome to StorIA, your creative writing companion!
			</p>
			<p>
				At StorIA, we believe in the power of storytelling and the magic of artificial intelligence.
				Our platform empowers writers of all levels to unleash their imagination and craft
				compelling stories with ease.
			</p>
		</div>

		<!-- Founding Story Section -->
		<div class="section">
			<h2 class="section-title">Founding Story</h2>
			<p>
				Founded by visionary university students and close friends, Andres Benjumea Reinoso and Juan
				Andres Porras Velez, StorIA was born out of a shared passion for technology and
				storytelling. With a dream to revolutionize the way stories are created, they embarked on a
				journey to bring their vision to life.
			</p>
			<p>
				With the invaluable contributions of their dedicated team members, Johan Junior Choles Lopez
				and Jesus Alberto Diaz Montiel, StorIA was meticulously developed and officially launched on
				May 30, 2024.
			</p>
		</div>

		<!-- Mission Section -->
		<div class="section">
			<h2 class="section-title">Our Mission</h2>
			<p>
				Since then, StorIA has been on a mission to democratize storytelling, providing writers
				worldwide with innovative tools and resources to fuel their creativity.
			</p>
			<p>
				Join us on this exciting adventure as we continue to inspire, innovate, and transform the
				world of storytelling!
			</p>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.text-column {
		max-width: 700px;
		padding: 0 20px;
		text-align: center;
	}

	.section-title {
		font-size: 2.5em;
		color: var(--green);
		margin-bottom: 1em;
		font-family: var(--chakra);
	}

	.section {
		margin-bottom: 2em;
		background: rgba(21, 84, 24, 0.486);
		padding: 1.5em 1.5em;
		border-radius: 2em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		animation: fadeIn 1s ease-in-out;
	}

	.section:nth-of-type(even) {
		transform: translateX(-5em);
	}

	.section:nth-of-type(odd) {
		transform: translateX(5em);
	}

	.section p {
		font-size: 1.2em;
		line-height: 1.2;
		letter-spacing: 0.1em;
		color: var(--white);
		font-family: var(--raleway);
		width: 80%;
		text-align: justify;
		margin-bottom: 0.8em;
	}
</style>
