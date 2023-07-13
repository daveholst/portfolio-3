<script lang="ts">
    let growHr = false

    setTimeout(() => {
        growHr = true
    }, 250)
</script>

<div class="root-container">
    <div class="hero-container">
        <hr class:grow-hr={growHr} />
        <h1>dave holst </h1>
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
        /* background-color: var(--colors-black); */
        /* color: var(--colors-white); */
    }

    .hero-container {
        display: flex;
        flex-direction: column;
        width: 330px;
        font-family: var(--fonts-sans);
        /* color: var(--colors-white); */
    }

    hr {
        margin: 0;
        width: 0%;
        transition: width 2s ease-out;
    }

    .grow-hr {
        width: 100%;
    }

    h1 {
        margin: 0;
        padding-top: var(--space-xs);
        font-size: var(--fontsize-lg);
    }

    span {
        font-size: var(--fontsize-lg);
    }
</style>
