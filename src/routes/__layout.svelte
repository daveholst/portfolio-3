<script>
</script>

<!-- for JS projects -->
<!-- {@html `<style id="stitches">${getCssText()}</style>`} -->

<!-- for TS projects due to a bug (https://github.com/sveltejs/svelte/issues/5292)-->
<!-- {@html `<${''}style id="stitches">${getCssText()}</${''}style>`} -->

<slot />

<style>
    /* Global Tokens */
    :root {
        --colors-black: #000;
        --colors-white: #fff;

        --space-xs: 4px;
        --space-s: 8px;
        --space-m: 16px;
        --space-ml: 24px;
        --space-lg: 32px;

        --fontSizes-xl: 2.875rem;
        --fontSizes-lg: 1.9rem;
        --fontSizes-md: 1.75rem;

        --fonts-sans: Arial, Helvetica, sans-serif;
        --fonts-mono: Söhne Mono, menlo, monospace;
    }
</style>
