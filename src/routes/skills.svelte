<script>
    import Heading from 'src/components/Heading/Heading.svelte'
    import NavBar from 'src/components/NavBar/NavBar.svelte'
</script>

<NavBar />
<div class="root-container">
    <div class="skills-container">
        <Heading title={'languages.'} />
        <p>
            TypeScript, JavaScript, CSS 3, HTML 5, SQL, Arduino C++, YAML,
            Python
        </p>
        <Heading title={'frontend.'} />
        <p>
            React, Remix, Svelte, SvelteKit, Express, handlebars, Redux,
            MaterialUI, Chaklra, Bulma, bootstrap
        </p>
        <Heading title={'backend.'} />
        <p>node.js, Express, Fastify, aws-sdk, graphQL, REST apis</p>
        <Heading title={'databases.'} />
        <p>
            MySQL, PostgreSQL, DynamoDB, MongoDB, Knex.js, Sequelize, mongoose,
        </p>
        <Heading title={'devops.'} />
        <p>
            Pulumi, GitHub Actions, GitHub Runners, Docker, Linux Sysadmin,
            Digital Ocean, Netlify, Heroku
        </p>
        <Heading title={'tooling.'} />
        <p>
            Nx, vite, esBuild, Webpack, jest, vitest, puppeteer, Playwright, git
        </p>
        <Heading title={'iot.'} />
        <p>Arduino C++, ESP micro-controllers, MQTT, Websockets, Electronics</p>
        <Heading title={'paradigms.'} />
        <p>
            Monorepos, Infrastructure as Code, Containerisation and
            Virtualisation, Single Table Design, Serverless, TDD, REST, MVC,
            Agile Development, Working Backwards
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
