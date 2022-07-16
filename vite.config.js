import { sveltekit } from '@sveltejs/kit/vite'
import  path  from 'path'

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    // Had to add the below to get the component import intellisense
        resolve: {
          alias: {
            src: path.resolve('./src')
          }
        }

}

export default config
