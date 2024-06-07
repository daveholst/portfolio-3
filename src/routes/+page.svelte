<script lang="ts">
    import { theme } from '../stores/theme'

    let growHr = false
    let isDark: boolean
    theme.subscribe(value => (value === 'dark' ? (isDark = true) : (isDark = false)))

    setTimeout(() => {
        growHr = true
    }, 250)
</script>

<div class="root-container">
    <div class="hero-container">
        <hr class:grow-hr={growHr} class:dark={isDark} />
        <h1 class:dark={isDark}>dave holst</h1>
        <span class:dark={isDark}>full stack developer.</span>
    </div>
</div>

<style>
    .root-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .hero-container {
        display: flex;
        flex-direction: column;
        width: 330px;
        font-family: var(--fonts-sans);
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

    h1 {
        margin: 0;
        padding-top: var(--space-xs);
        font-size: var(--fontsize-lg);
    }

    h1.dark {
        color: var(--colors-white);
    }

    span {
        font-size: var(--fontsize-lg);
    }

    span.dark {
        color: var(--colors-white);
    }
</style>
