<script lang="typescript">
    import { page } from '$app/stores'
    const pageStates = [
        { pageName: '.home', route: '/', currentlyOn: false },
        { pageName: '.about', route: '/about', currentlyOn: false },
        { pageName: '.skills', route: '/skills', currentlyOn: false },
        { pageName: '.projects', route: '/projects', currentlyOn: false },
        { pageName: '.cv', route: '/projects', currentlyOn: false },
        { pageName: '.contact', route: '/contact', currentlyOn: false },
    ]
    page.subscribe(pageInfo => {
        pageStates.forEach(
            page => (page.currentlyOn = page.route === pageInfo.url.pathname)
        )
    })
</script>

<div class="navbar-container">
    {#each pageStates as ps}
        <a href={ps.route} class="link" class:active-link={ps.currentlyOn}
            >{ps.pageName}</a
        >
    {/each}
</div>

<style>
    .navbar-container {
        position: absolute;
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        padding: var(--space-s);
    }
    .link {
        margin: var(--space-xs);
        text-decoration: none;
        font-family: var(--fonts-sans);
        font-size: var(--fontSizes-sm);
        font-weight: 400;
        color: var(--colors-white);
    }
    .active-link {
        color: var(--colors-pink);
    }
</style>
