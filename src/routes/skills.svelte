<script>
    import Heading from 'src/components/Heading/Heading.svelte'
    import NavBar from 'src/components/NavBar/NavBar.svelte'
</script>

<NavBar />
<div class="root-container">
    <div class="skills-container">
        <Heading title={'languages.'} />
        <p>
            TypeScript, JavaScript, CSS 3, HTML 5, SQL, Arduino C++, YAML, Basic
            Python
        </p>
        <Heading title={'frontend.'} />
        <p>
            React, Remix, Svelte, SvelteKit, Express, handlebars, Bulma,
            bootstrap
        </p>
        <Heading title={'backend.'} />
        <p>
            node.js, Express, Fastify, mySQL, mongoDB, SQLite, Sequelize,
            mongoose,
        </p>
        <Heading title={'databases.'} />
        <p>React, Express, handlebars, Bulma, bootstrap</p>
        <Heading title={'devops.'} />
        <p>
            GitHub actions, GitHub Runners, Docker, Linux admin, Digital Ocean,
            Netlify, Heroku
        </p>
        <Heading title={'tooling.'} />
        <p>git</p>
        <Heading title={'iot.'} />
        <p>Arduino C++, esp micro-controllers, mqtt, websockets, electronics</p>
        <Heading title={'paradigms.'} />
        <p>
            Single Table DynamoDB, TDD with Jest, REST API's, MVC, Agile
            Development, Working Backwards
        </p>
        <Heading title={'other.'} />
        <p>
            Solidworks, Fusion 360, Inventor, AutoCAD, Photoshop, InDesign,
            Illustrator
        </p>
    </div>
</div>

<style>
    .root-container {
        /* width: 100%; */
        min-height: 100vh;
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--colors-black);
    }
    .skills-container {
        max-width: 800px;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
