<script>
</script>

<slot />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: var(--colors-black);
    }
    :global(p) {
        max-width: 700px;
        margin: var(--space-md) var(--space-lg);
        font-family: var(--fonts-mono);
        font-size: var(--fontSize-sm);
        font-weight: 100;
        line-height: 30px;
        color: var(--colors-white);
    }
    /* Global Tokens */
    :root {
        --colors-black: #000;
        --colors-white: #fff;
        --colors-sage: #83c5be;
        --colors-pink: #ffb4a2;

        --space-xs: 4px;
        --space-sm: 8px;
        --space-md: 16px;
        --space-ml: 24px;
        --space-lg: 32px;

        --fontsize-xs: 1.1rem;
        --fontsize-sm: 1.25rem;
        --fontsize-md: 1.75rem;
        --fontsize-lg: 1.9rem;
        --fontsize-xl: 2.875rem;

        --fonts-sans: Arial, Helvetica, sans-serif;
        --fonts-serif: 'Times New Roman', Times, serif;
        --fonts-mono: 'Fira Code', monospace;
    }
</style>
