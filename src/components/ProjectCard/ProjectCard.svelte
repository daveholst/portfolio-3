<script lang="ts">
    import Heading from '../Heading/Heading.svelte'
    import { buildStackNames } from './utils/buildStackNames'
    import ProjectLink from './ProjectLink.svelte'
    import type { Project } from '../../data/projects'
    import { theme } from '../../stores/theme'

    export let project: Project
    let isDark: boolean
    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
</script>

<Heading title={project.title} />
{#each project.description as paragraph, index}
    <div>
        {#if index === 0}
            <p>
                <span class="stack-heading">description::</span>
                <span class:dark={isDark}>{paragraph}</span>
            </p>
        {:else}
            <p class:dark={isDark}>{paragraph}</p>
        {/if}
    </div>
{/each}
<p>
    <span class="stack-heading">stack::</span>
    <span class:dark={isDark}>{buildStackNames(project.stack)}</span>
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
    .dark {
        color: var(--colors-white);
    }
</style>
