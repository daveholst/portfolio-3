<script lang="ts">
    import { page } from '$app/stores'
    export let mode: 'dark' | 'light' = 'light'
    const changeModeHandler = () => (mode = mode === 'light' ? 'dark' : 'light')

    let pageStates = [
        { pageName: '.home', route: '/', currentlyOn: false },
        { pageName: '.projects', route: '/projects', currentlyOn: false },
        { pageName: '.skills', route: '/skills', currentlyOn: false },
        { pageName: '.about', route: '/about', currentlyOn: false },
        { pageName: '.cv', route: '/cv', currentlyOn: false },
        { pageName: '.contact', route: '/contact', currentlyOn: false },
    ]
    page.subscribe(pageInfo => {
        pageStates = pageStates.map(page => ({
            ...page,
            currentlyOn: page.route === pageInfo.route.id,
        }))
    })
</script>

<div class="navbar-container">
    <button
        class="link"
        on:click={changeModeHandler}
        on:keypress={changeModeHandler}
    >
        {`.${mode}`}
    </button>
    {#each pageStates as ps}
        <a href={ps.route} class="link" class:active-link={ps.currentlyOn}>
            {ps.pageName}
        </a>
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
        padding: var(--space-sm);
    }
    .link {
        margin: var(--space-xs);
        text-decoration: none;
        font-family: var(--fonts-sans);
        font-size: var(--fontsize-sm);
        font-weight: 400;
        color: var(--colors-white);
    }
    button.link {
        background: transparent;
        border: 0;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }

    @media only screen and (max-width: 450px) {
        .link {
            margin: 3px;
        }
        .navbar-container {
            justify-content: center;
        }
    }

    .link:hover {
        text-decoration: overline var(--colors-pink);
    }
    .active-link {
        color: var(--colors-pink);
        text-decoration: overline var(--colors-pink);
    }
</style>
