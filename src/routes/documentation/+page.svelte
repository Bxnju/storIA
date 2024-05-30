<script>
	import { onMount } from 'svelte';

	let activeContent = 'content-1';

	const showContent = (contentId) => {
		activeContent = contentId;
	};

	onMount(() => {
		const buttons = document.querySelectorAll('.btn');
		buttons.forEach((button) => {
			button.addEventListener('click', () => {
				showContent(button.dataset.contentId);
			});
		});
	});
</script>

<svelte:head>
	<title>StorIA | Documentation</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1 class="page-title">Documentation</h1>
</div>

<div class="todo">
	<div class="buttons">
		<button
			class="btn {activeContent === 'content-1' ? 'btn-active' : ''}"
			data-content-id="content-1"
			on:click={() => showContent('content-1')}
		>
			How to use <span class="material-icons"> help_outline </span>
		</button>
		<button
			class="btn {activeContent === 'content-2' ? 'btn-active' : ''}"
			data-content-id="content-2"
			on:click={() => showContent('content-2')}
		>
			Character <span class="material-icons"> accessibility_new </span>
		</button>
		<button
			class="btn {activeContent === 'content-3' ? 'btn-active' : ''}"
			data-content-id="content-3"
			on:click={() => showContent('content-3')}
		>
			Context <span class="material-icons"> emoji_objects </span>
		</button>
		<button
			class="btn {activeContent === 'content-4' ? 'btn-active' : ''}"
			data-content-id="content-4"
			on:click={() => showContent('content-4')}
		>
			Scenarios <span class="material-icons"> landscape </span>
		</button>
		<button
			class="btn {activeContent === 'content-5' ? 'btn-active' : ''}"
			data-content-id="content-5"
			on:click={() => showContent('content-5')}
		>
			Interactions <span class="material-icons"> favorite </span>
		</button>
		<button
			class="btn {activeContent === 'content-6' ? 'btn-active' : ''}"
			data-content-id="content-6"
			on:click={() => showContent('content-6')}
		>
			Comments <span class="material-icons"> insert_comment </span>
		</button>
		<button
			class="btn {activeContent === 'content-7' ? 'btn-active' : ''}"
			data-content-id="content-7"
			on:click={() => showContent('content-7')}
		>
			Reports <span class="material-icons"> report_problem </span>
		</button>
	</div>
	<div class="content-container">
		<div class="content {activeContent === 'content-1' ? 'visible' : ''}" id="content-1">
			<h1>How to use <span class="material-icons"> help_outline </span></h1>
			<img
				src="https://content.nationalgeographic.com.es/medio/2022/12/29/inteligencia-artificial_8d5b40c8_221229124239_1280x853.jpg"
				alt=""
			/>
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
		<div class="content {activeContent === 'content-2' ? 'visible' : ''}" id="content-2">
			<h1>Character <span class="material-icons"> accessibility_new </span></h1>
			<img
				src="https://static01.nyt.com/images/2023/09/27/multimedia/27META-AI-SUB1-clgh/27META-AI-SUB1-clgh-videoSixteenByNine3000.jpg"
				alt=""
			/>
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
		<div class="content {activeContent === 'content-3' ? 'visible' : ''}" id="content-3">
			<h1>Context <span class="material-icons"> emoji_objects </span></h1>
			<img src="https://i.pinimg.com/736x/e8/bf/f3/e8bff3d8091182dcbb0b3e64488b04b4.jpg" alt="" />
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
		<div class="content {activeContent === 'content-4' ? 'visible' : ''}" id="content-4">
			<h1>Scenarios <span class="material-icons"> landscape </span></h1>
			<img
				src="https://www.mascomunidad.org.ar/wp-content/uploads/2023/03/Ciudades-IA-2000x1125.jpg"
				alt=""
			/>
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
		<div class="content {activeContent === 'content-5' ? 'visible' : ''}" id="content-5">
			<h1>Interactions <span class="material-icons"> favorite </span></h1>
			<img src="https://reviewob.com/wp-content/uploads/2019/02/2-20-19social.jpg" alt="" />
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
		<div class="content {activeContent === 'content-6' ? 'visible' : ''}" id="content-6">
			<h1>Comments <span class="material-icons"> insert_comment </span></h1>
			<img
				src="https://media.sproutsocial.com/uploads/2023/11/Social-media-comments-final-2.png"
				alt=""
			/>
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
		<div class="content {activeContent === 'content-7' ? 'visible' : ''}" id="content-7">
			<h1>Reports <span class="material-icons"> report_problem </span></h1>
			<img src="https://cdn.mos.cms.futurecdn.net/Ww63adT4gZijYvL7naPhkY-1280-80.jpg.webp" alt="" />
			<p class="text-content">
				Qorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat voluptatibus cumque quasi
				optio nihil, debitis sit rem deserunt modi. Labore nobis reiciendis id repellendus aut
				provident soluta, nihil laudantium tenetur. Sequi molestiae, odio laborum ex deleniti quia
				eligendi dolore vero, dolor doloribus ipsa ullam! Deserunt voluptatem veritatis enim maiores
				quasi maxime labore suscipit? Alias aliquid nam maiores qui at aliquam. Illo, quidem vero?
				Autem minus fugit ad similique id atque cupiditate reprehenderit. Sint odit eligendi neque
				suscipit animi, tenetur rem nihil nostrum officia porro maiores, reprehenderit ipsa
				aspernatur eaque temporibus. Fuga eaque accusamus perspiciatis voluptate sapiente dolore
				tempore totam quas est nam, dolores commodi corporis eos omnis? Quisquam, aperiam alias.
				Quod asperiores aliquam eaque nostrum debitis voluptatem quia, enim voluptates. Nostrum,
				aliquam. Error voluptatibus modi nisi possimus optio ullam. Repellendus quis reiciendis sunt
				non, aspernatur voluptate quaerat suscipit qui dolorem debitis ab sequi nisi ipsa dolor
				nobis error repudiandae possimus? Est, sed expedita ab nihil voluptates ea totam maiores,
				quos provident, nam earum laboriosam obcaecati? Optio commodi iure sed alias facilis dolore
				atque veniam dignissimos corporis! Necessitatibus maxime aperiam animi? Deleniti officiis
				temporibus eius blanditiis eum excepturi, officia natus quasi, ex, facere exercitationem
				maiores earum quis. Ut minus aliquid hic alias esse libero maxime! Atque quod molestiae
				possimus alias fugiat. Dolorem quos officia animi quasi cumque tempora aliquam sapiente
				deleniti fuga debitis recusandae blanditiis alias reprehenderit perferendis explicabo
				laudantium, possimus corporis esse nulla velit, incidunt iusto. Numquam tempora porro
				voluptates?
			</p>
		</div>
	</div>
</div>

<style>
	.todo {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 85%;
		height: 80vh;
		box-shadow: 0 0 1em rgba(18, 111, 23, 0.721);
	}

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		width: 25%;
		height: 100%;
		font-family: 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
	}

	.btn {
		flex: 1;
		width: 100%;
		background: rgba(18, 111, 23, 0.266);
		backdrop-filter: blur(3px);
		cursor: pointer;
		font-size: 1.2em;
		font-family: var(--chakra);
		color: white;
		border: none;
		outline: none;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.5s;
		overflow: hidden;
	}

	.btn span {
		opacity: 0;
		font-size: 0;
		transition: 0.5s ease-in-out;
	}

	.btn:hover span {
		font-size: 1.3em;
		margin-left: 0.3em;
		opacity: 1;
	}

	.btn::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 300%;
		background: rgba(18, 111, 23, 0.077);
		backdrop-filter: blur(3px);
		border-radius: 50%;
		z-index: -1;
		transform: scale(0);
		transition: transform 0.5s ease-in;
	}

	.btn.btn-active::before {
		transform: scale(3);
	}

	.btn.btn-active {
		backdrop-filter: blur(10px);
		text-shadow: 0 0 5px var(--white);
	}

	.btn.btn-active span {
		font-size: 1.3em;
		margin-left: 0.3em;
		opacity: 1;
		animation: neon 2s infinite ease;
	}

	.content-container {
		width: 75%;
		background: rgba(18, 111, 23, 0.51);
		backdrop-filter: blur(10px);
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: none;
		color: var(--white);
		height: 100%;
		width: 100%;
		overflow: auto;
		padding: 2em 2em 2em 4em;
		font-family: var(--raleway);
	}

	.content h1 span {
		margin-left: 0.3em;
		font-size: 1.3em;
	}

	.content::-webkit-scrollbar {
		width: 10px;
	}

	.content::-webkit-scrollbar-thumb {
		background-color: var(--m-green);
		border-radius: 10px;
	}

	.content::-webkit-scrollbar-track {
		background-color: transparent;
		border-radius: 10px;
	}

	.content.visible {
		display: grid;
		place-items: center start;
		animation: fadeIn 1s;
	}

	.content.visible {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 columnas iguales */
		grid-template-rows: repeat(10, 1fr); /* 5 filas iguales */
		gap: 10px; /* Espacio entre celdas */
		animation: fadeIn 1s;
	}

	/* Estilos para el título */
	.content h1 {
		grid-column: 1 / 5; /* Ocupa 2 columnas */
		grid-row: 1; /* Está en la primera fila */
		padding: 0.5em 1em;
		margin: auto;
		background-color: var(--d-green);
		color: var(--white);
		margin-bottom: 1em;
		border-radius: 2em;
		font-family: var(--chakra);
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 1.8em;
	}

	.content > img {
		grid-column: span 4;
		grid-row: span 5;
		object-fit: cover;
		margin-bottom: 2em;
		height: 100%;
		width: 100%;
	}

	.content .text-content {
		margin-top: 1em;
		text-align: justify;
		grid-column: span 4;
		grid-row: 10;
		color: var(--white);
		overflow: auto;
		padding: 2em 2em 2em 4em;
		font-family: var(--raleway);
	}

	.content .text-content::first-letter {
		font-family: var(--chakra);
		font-size: 2em;
		color: var(--l-green);
	}

	.content .text-content::-webkit-scrollbar {
		width: 10px;
	}

	.content .text-content::-webkit-scrollbar-thumb {
		background-color: var(--l-green);
		border-radius: 10px;
	}

	.content .text-content::-webkit-scrollbar-track {
		background-color: transparent;
		border-radius: 10px;
	}
</style>
