<script lang="ts">
    export let github: string | undefined
    export let live: string | undefined
    export let video: string | undefined
</script>

<div class="links-container">
    {#if live}
        <a href={live}>live-deploy.</a>
    {/if}
    {#if github}
        <a href={github}>github.</a>
    {/if}
    {#if video}
        <a href={video}>video-demonstration.</a>
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
        color: var(--colors-white);
        font-size: var(--fontsize-xs);
        font-weight: 600;
    }

    a:hover {
        color: var(--colors-pink);
        border-bottom: 1px solid var(--colors-white);
    }
</style>
