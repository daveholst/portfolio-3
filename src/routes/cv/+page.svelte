<script lang="ts">
    import Heading from '../../components/Heading/Heading.svelte'
    import { theme } from '../../stores/theme'

    let isDark: boolean
    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
</script>

<div class="root-container">
    <div class="cv-container">
        <Heading title={'cv.'} />
        <a
            class:dark={isDark}
            href="https://docs.google.com/document/d/1q5_PXuCAqPiteqWMavtxkzISBhanCc1E7xg7F6MHcOk/export?format=pdf"
        >
            download cv.
        </a>
        <a class:dark={isDark} href="/contact">contact for references.</a>
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
        color: var(--colors-white);
    }

    .cv-container {
        display: flex;
        flex-direction: column;
        width: 330px;
        font-family: var(--fonts-sans);
        color: var(--colors-white);
    }

    a {
        margin: var(--space-sm);
        align-self: flex-end;
        text-decoration: none;
        font-family: var(--fonts-sans);
        font-size: var(--fontsize-sm);
        font-weight: 400;
        color: var(--colors-black);
    }
    a.dark {
        color: var(--colors-white);
    }

    a:hover {
        text-decoration: overline var(--colors-pink);
        color: var(--colors-pink);
    }
</style>
