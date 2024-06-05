<script lang="ts">
    import Heading from '../Heading/Heading.svelte'
    import { buildStackNames } from './utils/buildStackNames'
    import ProjectLink from './ProjectLink.svelte'
    import type { Project } from '../../data/projects'
    import { theme } from '../../stores/theme'

    export let project: Project
    let isDark: boolean
    theme.subscribe(value => (value === 'dark' ? (isDark = true) : (isDark = false)))
</script>

<Heading title={project.title} />

{#each project.description as paragraph, index}
    <p class:dark={isDark}>{paragraph}</p>
    <br />
{/each}

{#if project.keyAchievements}
    <h2 class="project-subheading" class:dark={isDark}>highlights.</h2>
    <ul>
        {#each project.keyAchievements as achievement}
            <li class:dark={isDark}>{achievement}</li>
        {/each}
    </ul>
{/if}

<h2 class="project-subheading" class:dark={isDark}>stack.</h2>
<p class="stack-names" class:dark={isDark}>
    {buildStackNames(project.stack)}
</p>

<h2 class="project-subheading" class:dark={isDark}>links.</h2>
<ProjectLink github={project.github} live={project.live} video={project.video} />

<style>
    p {
        margin: 0;
    }
    h2 {
        padding-top: var(--space-lg);
    }
    ul {
        padding: 0;
    }
    li {
        font-family: var(--fonts-mono);
        font-weight: 300;
        font-size: var(--fontsize-xs);
        padding-top: 2px;
        padding-bottom: 2px;
        line-height: 32px;
        list-style: none;
        border-bottom: 1px solid #ccc;
    }

    li:first-of-type {
        border-top: 1px solid #ccc;
    }

    .project-subheading {
        margin-top: var(--space-xl);
        margin-bottom: var(--space-md);
        color: var(--colors-black);
        font-family: var(--fonts-sans);
        font-size: var(--fontsize-sm);
        font-weight: 500;
        letter-spacing: 0.5px;
    }
    .project-subheading.dark {
        color: var(--colors-pink);
    }
    .dark {
        color: var(--colors-white);
    }
</style>
