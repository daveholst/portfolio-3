<script lang="ts">
    import { theme } from '../../stores/theme'

    export let github: string | undefined
    export let live: string | undefined
    export let video: string | undefined

    let isDark: boolean
    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
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
        margin: var(--space-md) var(--space-lg) var(--space-lg);
    }

    a {
        margin-right: var(--space-xs);
        text-decoration: none;
        font-family: var(--fonts-mono);
        color: var(--colors-black);
        font-size: var(--fontsize-xs);
        font-weight: 600;
    }

    a.dark {
        color: var(--colors-white);
    }

    a:hover {
        color: var(--colors-pink);
        border-bottom: 1px solid var(--colors-pink);
    }

    a.dark:hover {
        border-bottom: 1px solid var(--colors-white);
    }
</style>
