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
            // default options are shown. On some platforms
            // these options are set automatically — see below
            runtime: 'edge',
            // pages: 'build',
            // assets: 'build',
            fallback: 'index.html',
            precompress: true,
            strict: true,
        }),
    },
}

export default config
