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
                <!-- <span class="stack-heading" class:dark={isDark}>
                    description::
                </span> -->
                <span class:dark={isDark}>{paragraph}</span>
            </p>
        {:else}
            <p class:dark={isDark}>{paragraph}</p>
        {/if}
    </div>
{/each}
{#if project.keyAchievements}
    <p class="stack">
        <span class="project-subheading" class:dark={isDark}>
            achievements.
        </span>
    </p>
    <ul>
        {#each project.keyAchievements as achievement}
            <li class:dark={isDark}>{achievement}</li>
        {/each}
    </ul>
{/if}
<p class="stack">
    <span class="project-subheading" class:dark={isDark}>stack.</span>
    <br />
    <span class="stack-names" class:dark={isDark}>
        {buildStackNames(project.stack)}
    </span>
</p>

<ProjectLink
    github={project.github}
    live={project.live}
    video={project.video}
/>

<style>
    li {
        font-family: var(--fonts-mono);
        /* font-family: 'Dosis'; */
        font-weight: 200;
        font-size: var(--fontsize-xs);
        line-height: 40px;
        list-style: square;
    }

    .stack-names {
        font-family: var(--fonts-mono);
    }

    .project-subheading {
        color: var(--colors-sage);
        font-family: var(--fonts-mono);
        font-style: italic;
        font-size: var(--fontsize-sm);
        font-weight: 600;
    }
    .project-subheading.dark {
        color: var(--colors-pink);
    }
    .dark {
        color: var(--colors-white);
    }
</style>
