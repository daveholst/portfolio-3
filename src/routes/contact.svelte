<script>
    import Heading from 'src/components/Heading/Heading.svelte'
    import NavBar from 'src/components/NavBar/NavBar.svelte'
</script>

<NavBar />
<div class="root-container">
    <div class="contact-container">
        <Heading title={'contact.'} />
        <a href="mailto:contact@daveholst.dev">email.</a>
        <a href="https://github.com/daveholst">github.</a>
        <a href="https://www.linkedin.com/in/daveholst/">linkedin.</a>
    </div>
</div>

<style>
    .root-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        background-color: var(--colors-black);
        color: var(--colors-white);
    }

    .contact-container {
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
        color: var(--colors-white);
    }

    a:hover {
        text-decoration: overline var(--colors-pink);
        color: var(--colors-pink);
    }
</style>
