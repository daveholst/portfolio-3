<script lang="ts">
    import { theme } from '../../stores/theme'

    let isDark: boolean
    theme.subscribe(value => (value === 'dark' ? (isDark = true) : (isDark = false)))
</script>

<div class="root-container">
    <img src="images/headshot-sml.jpeg" alt="author headshot" />
    <p class:dark={isDark}>
        Born and raised in the country, my love for technology is matched only by my passion for the outdoors. I spend
        much of my free time camping, hiking, kite-surfing, fishing, and diving. Desert motorbike expeditions that last
        multiple days are a particular favorite of mine. I've always had a knack for tinkering, being the one to
        dismantle things just to see how they work and If they will ever go back together again.
    </p>
    <p class:dark={isDark}>
        I would consider myself a generalist, not afraid of the unknown and keen to jump into any codebase. I love to
        learn, and nothing pleases me more than learning a new technology, pattern or way of working. I like listening
        to podcasts and reading online to try and see what 'the next big thing will be'. In my personal projects I spend
        a lot of time playing with and testing new frameworks and tools.
    </p>
    <p class:dark={isDark}>
        My personal technology interests include making, programming, electronics, home-automation and home-labbing. I'm
        always on the quest to see what I can create to make life easier, this has lead me to automate my entire house
        using a mix of open-source, self designed and commercial products. All these devices become compatible with each
        other through back-end systems running on a server in my shed. I hit the ceiling of what I could achieve with no
        programming knowledge and I started learning from courses online. I had found my passion and how I wanted to
        spend the rest of my working life. This prompted me to enroll in a bootcamp at UWA whilst also continuing my
        self-learning and I haven't stopped learning since.
    </p>
    <p class:dark={isDark}>
        I have previously worked as a Teacher with degrees in both Design and Education and have a Diploma in Mechanical
        Engineering. I am well versed at creating and making in a range of contexts. I see software engineering as
        applying what I have been doing for years, solving problems, just with a different tool set.
    </p>
</div>

<style>
    .root-container {
        margin-left: auto;
        margin-right: auto;
        max-width: 800px;
        min-height: 100vh;
        display: flex;
        padding: 20px;
        padding-top: 100px;
        padding-bottom: 100px;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 300px;
        margin-bottom: 80px;
        border-radius: 5px;
    }
</style>
