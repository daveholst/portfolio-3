<script lang="ts">
    import { theme } from '../../stores/theme'

    export let github: string | undefined
    export let live: string | undefined
    export let video: string | undefined

    let isDark: boolean
    theme.subscribe(value => (value === 'dark' ? (isDark = true) : (isDark = false)))
</script>

<div class="links-container">
    {#if live}
        <a class:dark={isDark} href={live}>live-deploy.</a>
    {/if}
    {#if github}
        <a class:dark={isDark} href={github}>github.</a>
    {/if}
    {#if video}
        <a class:dark={isDark} href={video}>video-demonstration.</a>
    {/if}
</div>

<style>
    .links-container {
        /* margin: var(--space-md) var(--space-lg) var(--space-lg); */
        /* margin-top: var(--space-md); */
        margin-bottom: var(--space-xl);
    }

    a {
        margin-right: var(--space-xs);
        text-decoration: none;
        font-family: var(--fonts-mono);
        font-size: var(--fontsize-xs);
        font-weight: 400;
        color: var(--colors-black);
    }

    a.dark {
        color: var(--colors-white);
    }

    a:hover {
        text-decoration: underline var(--colors-sage);
    }

    a.dark:hover {
        text-decoration: underline var(--colors-pink);
    }
</style>
