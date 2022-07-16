<script lang="typescript">
    import NavBar from 'src/components/NavBar/NavBar.svelte'

    // import NavBar from 'src/components/NavBar/NavBar.svelte'

    let growHr = false

    setTimeout(() => {
        console.log('first', growHr)
        growHr = true
        console.log('second', growHr)
    }, 250)
</script>

<NavBar />
<div class="root-container">
    <div class="hero-container">
        <hr class:grow-hr={growHr} />
        <h1>dave holst</h1>
        <span>full stack developer.</span>
    </div>
</div>

<style>
    .root-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: black;
        color: white;
    }

    .hero-container {
        display: flex;
        flex-direction: column;
        width: 330px;
        font-family: var(--fonts-sans);
        color: var(--colors-white);
    }

    hr {
        margin-left: 0;
        width: 0%;
        transition: width 2s ease-out;
    }

    .grow-hr {
        width: 100%;
    }

    h1 {
        margin: 0;
        padding-top: var(--space-xs);
        font-size: var(--fontSizes-lg);
    }

    span {
        font-size: var(--fontSizes-lg);
    }
</style>
