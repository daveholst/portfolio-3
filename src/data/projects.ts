export interface Project {
    title: string
    description: string[]
    stack: string[]
    github?: string
    live?: string
    video?: string
}

export const projects: Project[] = [
    {
        title: 'thewest.com.au.',
        description: [
            'during my day job as a Full Stack Developer at Seven West Media, I primarily work on a collection of both mono and traditional repos that serve thewest.com.au, sevennews.com.au, perthnow.com.au and their supporting publishing pipelines. Our front end is an SSR / SPA hybrid app with a custom JSON layout routing engine for simple modifications to page layouts. Components are shared across all 3 news sites with an Emotion based design token systems to help appropriately style the components.',

            'The publishing pipeline has a range of services running on ec2 instances through to event driven serverless microservices running on both regional and lambdas@edge.',
            'These mastheads and supporting services deliver to over 1m unique users daily. It is an efficient architecture that focus on ephemeral serverless architecture to keep costs down and scale under periods of heavy traffic',
        ],
        stack: [
            'Nx',
            'TypeScript',
            'React',
            'Emotion',
            'Chakra',
            'Express',
            'Pulumi',
            'AWS Services',
        ],
        live: 'https://thewest.com.au/',
    },
    {
        title: 'url shortener.',
        description: [
            'this project was a proof of concept to get a remix app to work on a vanilla AWS serverless based stack orchestrated via Pulumi. Remix is providing SSR via a lambda to the cloudfront instance. Cloudfront is routing static data from an s3 bucket and requesting new content from the lambda on expired cache headers. ',

            'An adapter does not currently exist for running remix in a vanilla AWS Lambda. This project leverages the architects event adapter that takes the lambda event and re-shapes it to the expected request shape Remix uses. Short, hashed URLs are stored with their corresponding full address in a dynamo table',
        ],
        stack: [
            'TypeScript',
            'Remix.run',
            'React',
            'Stitches',
            'Pulumi',
            'Lambda',
            'CloudFront',
            'S3',
            'DynamoDB',
        ],
        github: 'https://github.com/daveholst/remix-url-shortener',
        live: 'https://link.dh.wtf/',
    },
    {
        title: 'portfolio ver3.',
        description: [
            'the most recent iteration of my personal folio site focuses on minimal design with clean code written in Svelte. I have utilised the SvelteKit framework to enable easy directory driven routing with a delightful devXP. Via an adapter, a GitHub action builds the site out to static files and moves them to a gh-pages branch where they are deployed and accessible from my personal domain',
        ],
        stack: [
            'Svelte',
            'SvelteKit',
            'Playwright',
            'vitest',
            'GitHub Actions',
            'GitHub Pages',
        ],
        github: 'https://github.com/daveholst/portfolio-3/',
        live: 'https://daveholst.dev/',
    },
    {
        title: 'lawnman.',
        description: [
            'this project was a proof of concept to get a remix app to work on a vanilla AWS serverless based stack orchestrated via Pulumi. ',
        ],
        stack: ['remix', 'react', 'stitches'],
        github: 'https://github.com/daveholst/remix-url-shortener',
        video: 'https://www.youtube.com/watch?v=p6GRGrSMjmU',
    },
    {
        title: 'juicebox.',
        description: [
            'this project was a proof of concept to get a remix app to work on a vanilla AWS serverless based stack orchestrated via Pulumi. ',
        ],
        stack: ['arduino c++', 'platformIO', 'MQTT', 'ESP-32'],
        github: 'https://github.com/daveholst/juice-box',
    },
]
