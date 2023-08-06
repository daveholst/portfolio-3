<script lang="ts">
    import Heading from '../../components/Heading/Heading.svelte'
    import { theme } from '../../stores/theme'

    let isDark: boolean
    theme.subscribe(value =>
        value === 'dark' ? (isDark = true) : (isDark = false)
    )
</script>

<div class="root-container">
    <div class="skills-container">
        <Heading title={'languages.'} />
        <p class:dark={isDark}>
            TypeScript, JavaScript, Python, CSS 3, HTML 5, SQL, Arduino C++,
            YAML
        </p>
        <Heading title={'frontend.'} />
        <p class:dark={isDark}>
            React, Remix, next, Svelte, SvelteKit, Express, handlebars, Redux,
            MaterialUI, Tailwind, Flowbite ,Chakra, Bulma, bootstrap
        </p>
        <Heading title={'backend.'} />
        <p class:dark={isDark}>
            node.js, Express, Fastify, Django, aws-sdk, graphQL, DRF, REST apis
        </p>
        <Heading title={'databases.'} />
        <p class:dark={isDark}>
            MySQL, PostgreSQL, DynamoDB, MongoDB, Knex.js, Sequelize, Django
            ORM, mongoose
        </p>
        <Heading title={'devops.'} />
        <p class:dark={isDark}>
            Pulumi, AWS CDK, GitHub Actions, GitHub Runners, Docker, Linux
            Sysadmin, Digital Ocean, Netlify, Heroku, Vercel
        </p>
        <Heading title={'tooling.'} />
        <p class:dark={isDark}>
            Nx, vite, esBuild, Webpack, storybook, chromatic, jest, vitest,
            puppeteer, Playwright, git
        </p>
        <Heading title={'iot.'} />
        <p class:dark={isDark}>
            Arduino C++, ESP micro-controllers, MQTT, Websockets, Electronics
        </p>
        <Heading title={'paradigms.'} />
        <p class:dark={isDark}>
            Monorepos, Infrastructure as Code, Containerisation and
            Virtualisation, Single Table Design, Serverless, TDD, REST, MVC,
            Agile Development, Working Backwards
        </p>
        <Heading title={'other.'} />
        <p class:dark={isDark}>
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
        /* background-color: var(--colors-black); */
    }
    .skills-container {
        max-width: 800px;
        flex-direction: column;
        align-items: flex-start;
    }
</style>
