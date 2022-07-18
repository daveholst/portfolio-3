<script>
    import NavBar from 'src/components/NavBar/NavBar.svelte'
</script>

<!-- TODO temp placeholder, edit later -->
<NavBar />
<div class="root-container">
    <div class="hero-container">
        <!-- <hr class:grow-hr={growHr} /> -->
        <h1>contact</h1>
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
</style>
