<script lang="ts">
    import type { Project } from 'src/data/projects'
    import Heading from '../Heading/Heading.svelte'
    import { buildStackNames } from './utils/buildStackNames'
    import ProjectLink from './ProjectLink.svelte'

    export let project: Project
</script>

<Heading title={project.title} />
{#each project.description as paragraph, index}
    <p>
        {#if index === 0}
            <span class="stack-heading">description::</span>
            <span>{paragraph}</span>
        {:else}
            {paragraph}
        {/if}
    </p>
{/each}
<p>
    <span class="stack-heading">stack::</span>
    <span>{buildStackNames(project.stack)}</span>
</p>

<ProjectLink
    github={project.github}
    live={project.live}
    video={project.video}
/>

<style>
    .stack-heading {
        font-family: var(--fonts-mono);
        font-weight: 600;
        color: var(--colors-pink);
    }
</style>
