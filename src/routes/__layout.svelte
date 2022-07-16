<script>
</script>

<slot />

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap');
    :global(body) {
        margin: 0;
        padding: 0;
    }
    :global(p) {
        max-width: 700px;
        margin: var(--space-m) var(--space-lg);
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
        --space-s: 8px;
        --space-m: 16px;
        --space-ml: 24px;
        --space-lg: 32px;

        --fontSizes-xl: 2.875rem;
        --fontSizes-lg: 1.9rem;
        --fontSizes-md: 1.75rem;
        --fontSizes-sm: 1.25rem;

        --fonts-sans: Arial, Helvetica, sans-serif;
        --fonts-serif: 'Times New Roman', Times, serif;
        --fonts-mono: 'Fira Code', monospace;
    }
</style>
