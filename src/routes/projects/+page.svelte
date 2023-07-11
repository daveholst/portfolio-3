<script lang="ts">
    import NavBar from 'src/components/NavBar/NavBar.svelte'
    import ProjectCard from 'src/components/ProjectCard/ProjectCard.svelte'
    import { projects } from 'src/data/projects'
</script>

<NavBar />
<div class="root-container">
    <div class="projects-container">
        {#each projects as project}
            <ProjectCard {project} />
        {/each}
    </div>
</div>

<style>
    .root-container {
        min-height: 100vh;
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--colors-black);
    }
    .projects-container {
        max-width: 800px;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
