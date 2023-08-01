<script lang="ts">
    import { theme } from '../../stores/theme'

    export let title: string

    let growHr = false
    setTimeout(() => {
        growHr = true
    }, 250)
    let isDark: boolean
    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
</script>

<div class="heading-container">
    <hr class:dark={isDark} class:grow-hr={growHr} />
    <h2 class:dark={isDark}>{title}</h2>
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

    hr.dark {
        color: var(--colors-white);
    }
    .grow-hr {
        width: 100%;
    }
    h2 {
        margin: 0;
        padding-top: var(--space-xs);
        font-size: var(--fontsize-md);
        color: var(--colors-black);
    }

    h2.dark {
        color: var(--colors-white);
    }
</style>
