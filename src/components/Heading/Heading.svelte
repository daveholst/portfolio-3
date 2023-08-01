<script lang="ts">
    export let title: string

    let growHr = false

    setTimeout(() => {
        growHr = true
    }, 250)
</script>

<div class="heading-container">
    <hr class:grow-hr={growHr} />
    <h2>
        {title}
    </h2>
</div>

<style>
    .heading-container {
        max-width: 350px;
        margin-left: var(--space-md);
        display: flex;
        flex-direction: column;
        font-family: var(--fonts-sans);
        color: var(--colors-white);
    }
    hr {
        margin: 0;
        width: 0%;
        transition: width 2s ease-out;
    }
    .grow-hr {
        width: 100%;
    }
    h2 {
        margin: 0;
        padding-top: var(--space-xs);
        font-size: var(--fontsize-md);
    }
</style>
