<script lang="ts">
    import NavBar from '../components/NavBar/NavBar.svelte'
    import { theme } from '../stores/theme'
    // TODO whack a store in here for theme
    // maybe something like this the OS detection + overwrite + local storage
    // https://svelte.dev/repl/15a88f72670845b4a173bc558fd537f9?version=3.29.7
    let isDark: boolean
    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
</script>

<NavBar />
<body class:dark={isDark}>
    <slot />
</body>

<style>
    body {
        margin: 0;
        padding: 0;
        background-color: var(--background-light);
        transition: background-color 0.5s;
    }

    body.dark {
        /* Seems like a weird bug in here would let me use a CSS variable in here*/
        background-color: var(--background-dark);
        background-color: #000;
        transition: background-color 0.5s;
    }

    :global(p) {
        max-width: 700px;
        margin: var(--space-md) var(--space-lg);
        font-family: var(--fonts-mono);
        font-size: var(--fontsize-xs);
        font-weight: 100;
        line-height: 30px;
        color: var(--text-light);
    }

    :global(p.dark) {
        color: var(--text-dark);
    }
    /* Global Tokens */
    :root {
        --colors-black: #000;
        --colors-white: #fff;
        --colors-sage: #83c5be;
        --colors-pink: #ffb4a2;

        --text-light: #000;
        --text-dark: #fff;
        --background-light: #fff;
        --background-dark: #000;

        --space-xs: 0.25rem;
        --space-sm: 0.5rem;
        --space-md: 1rem;
        --space-ml: 1.5rem;
        --space-lg: 2rem;
        --space-xl: 2.5rem;

        --fontsize-xs: 1rem;
        --fontsize-sm: 1.25rem;
        --fontsize-md: 1.75rem;
        --fontsize-lg: 1.9rem;
        --fontsize-xl: 2.875rem;

        --fonts-sans: Arial, Helvetica, sans-serif;
        --fonts-serif: 'Times New Roman', Times, serif;
        --fonts-mono: 'Fira Code', monospace;
    }
</style>
