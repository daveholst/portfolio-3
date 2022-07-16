<script lang="ts">
    export let title: string
</script>

<div class="heading-container">
    <hr />
    <h2>
        {title}
    </h2>
</div>

<style>
    .heading-container {
        max-width: 350px;
        margin-left: var(--space-m);
        display: flex;
        flex-direction: column;
        font-family: var(--fonts-sans);
        color: var(--colors-white);
    }
    hr {
        margin: 0;
    }
    h2 {
        margin: 0;
        padding-top: var(--space-xs);
        font-size: var(--fontSizes-lg);
    }
</style>
