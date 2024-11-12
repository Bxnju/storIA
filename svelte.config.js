import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			// Maneja errores HTTP durante el prerender
			handleHttpError: ({ status, path }) => {
				if (status === 404) {
					console.warn(`❌ Skipping prerender for: ${path} (404)`);
					return; // Ignora el error 404 y continúa con el resto del prerender
				}
				// Opcionalmente, puedes manejar otros códigos de error si es necesario
			}
		}
	}
};

export default config;
