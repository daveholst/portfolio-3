// import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-vercel'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),
    kit: {
        adapter: adapter({
            runtime: 'edge',
        }),
    },
    alias: {
        "$types/*": "./src/types/*",
        "$lib/*": "./src/lib/*",
        "$components/*": "./src/components/*",
        "$images/*": "./static/images/",
    }
}

export default config
