<script lang="ts">
    import { onMount } from 'svelte'
    import NavBar from '../components/NavBar/NavBar.svelte'
    import { theme } from '../stores/theme'
    // TODO whack a store in here for theme
    // maybe something like this the OS detection + overwrite + local storage
    // https://svelte.dev/repl/15a88f72670845b4a173bc558fd537f9?version=3.29.7
    import { dev } from '$app/environment'
    // Vercel analytics: https://vercel.com/docs/concepts/analytics/quickstart
    import { inject } from '@vercel/analytics'
    inject({ mode: dev ? 'development' : 'production' })

    let isDark: boolean

    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
    //TODO this causes a jank flash, seems to be a few hacks to fix it.
    // onMount(() => {
    //     const isBrowserDarkMode =
    //         window.matchMedia &&
    //         window.matchMedia('(prefers-color-scheme: dark)').matches
    //     if (!isBrowserDarkMode) {
    //         theme.set('dark')
    //     }
    // })
</script>

<NavBar />
<div class="body-wrapper" class:dark={isDark}>
    <slot />
</div>

<!-- TODO: fix gross elastic white top with this: https://www.tempertemper.net/blog/scroll-bounce-page-background-colour -->
<style>
    @font-face {
        font-family: 'Agave';
        font-style: normal;
        font-weight: 100;
        src: url('/fonts/agave_regular.ttf');
    }
    @font-face {
        font-family: 'Agave';
        src: url('/fonts/agave_bold.ttf');
        font-style: normal;
        font-weight: 300;
    }
    @font-face {
        font-family: 'Lora';
        src: url('/fonts/lora_regular.ttf');
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: 'Dosis';
        src: url('/fonts/dosis_light.ttf');
        font-style: normal;
        font-weight: 100;
    }

    @font-face {
        font-family: 'Dosis';
        src: url('/fonts/dosis_book.ttf');
        font-style: normal;
        font-weight: 200;
    }

    @font-face {
        font-family: 'Argon';
        src: url('/fonts/monaspace_argon.woff2');
    }

    :global(body) {
        margin: 0;
        padding: 12;
    }
    .body-wrapper {
        background-color: var(--background-light);
        transition: background-color 0.5s;
    }

    .body-wrapper.dark {
        /* Seems like a weird bug in here would let me use a CSS variable in here*/
        background-color: var(--background-dark);
        transition: background-color 0.5s;
    }

    :global(p) {
        max-width: 700px;
        margin: var(--space-md) var(--space-lg);
        font-family: var(--fonts-mono);
        font-size: var(--fontsize-xs);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        font-weight: 300;
        line-height: 38px;
        color: var(--text-light);
    }

    :global(p.dark) {
        color: var(--text-dark);
        font-weight: 100;
    }
    /* Global Tokens */
    :root {
        --colors-black: #000;
        --colors-white: #fff;
        --colors-sage: #219ebc;
        --colors-pink: #ffb4a2;

        --text-light: #000;
        --text-dark: #fff;
        --background-light: #fff;
        --background-dark: #02111b;

        --space-xs: 0.25rem;
        --space-sm: 0.5rem;
        --space-md: 1rem;
        --space-ml: 1.5rem;
        --space-lg: 2rem;
        --space-xl: 2.5rem;

        --fontsize-xs: 0.9rem;
        --fontsize-sm: 1.25rem;
        --fontsize-md: 1.75rem;
        --fontsize-lg: 1.9rem;
        --fontsize-xl: 2.875rem;

        --fonts-sans: Arial, Helvetica, sans-serif;
        --fonts-serif: 'Lora', 'Times New Roman', Times, serif;
        /* --fonts-mono: 'Fira Code', monospace; */
        /* I know this isn't a mono font, dont @ me */
        /* --fonts-mono: Agave, arial; */
        --fonts-mono: 'Argon', monospace;
    }
</style>
