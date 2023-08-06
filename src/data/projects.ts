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
        title: 'last yard.',
        description: [
            'As a Product Engineer, I was responsible for overseeing the retail marketing platform in its entirety. This involved utilising a React frontend served from Django to provide cutting-edge signage and marketing solutions for leading retailers in Australia.',
            'In my role, I collaborate closely with designers to implement both frontend and backend solutions for both existing features and new enhancements. Additionally, I frequently provide on-call support to the platform team, ensuring the smooth functioning of the infrastructure.',
        ],
        stack: [
            'Python',
            'Django',
            'Typescript',
            'React',
            'Tailwind',
            'StoryBook',
            'Docker Swarm',
            'RabbitMQ',
            'Celery',
            'AWS Services',
        ],
        live: 'https://lastyard.com/',
    },
    {
        title: 'seven west media.',
        description: [
            'during my day job as a Full Stack Developer at Seven West Media, I primarily worked on a collection of both mono and traditional repos that serve thewest.com.au, sevennews.com.au, perthnow.com.au and their supporting publishing pipelines. Our front was an SSR / SPA hybrid app with a custom JSON layout routing engine for simple modifications to page layouts. Components are shared across all 3 news sites with an Emotion based design token system to help appropriately style the components.',

            'The publishing pipeline has a range of services running on ec2 instances through to event driven serverless microservices running primarily on lambdas',
            'These mastheads and supporting services deliver to over 1m unique users daily. It is an efficient architecture that focus on ephemeral serverless architecture to keep costs down and scale under periods of heavy traffic.',
        ],
        stack: [
            'Nx',
            'TypeScript',
            'React',
            'Redux',
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
            'An adapter did not exist for running remix in a vanilla AWS Lambda. This project leverages the architects event adapter that takes the lambda event and re-shapes it to the expected request shape Remix uses. Short, hashed URLs are stored with their corresponding full address in a dynamo table',
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
        title: 'lawn manager.',
        description: [
            'lawn manager is a lawn and garden management hardware & software solution that uses the technique of fertigation to deliver fertiliser to lawns and garden beds via existing reticulation systems. This was my final project for my bootcamp and is currently in a state of heavy refactoring.',
            'I have moved the project to a more commercial serverless model by breaking systems into individual microservices with a focus on building out strong admin & direct control tools. This will allow me to build a robust backend that functions in a slightly clunky way while I rethink the frontend app. The above experiments in Svelte and Remix are helping my choose the path for this phase! I hope to get this to a stage where I can share it with the Home Assistant OSS community',
        ],
        stack: [
            'Nx',
            'React',
            'Emotion',
            'Chakra',
            'MaterialUI',
            'Pulumi',
            'MQTT',
            'SNS',
            'Cognito',
            'DynamoDB',
            'Lambda',
            'S3',
            'Cloudfront',
        ],
        github: 'https://github.com/daveholst/lawn-man-mono',
        video: 'https://www.youtube.com/watch?v=p6GRGrSMjmU',
    },
    {
        title: 'juicebox.',
        description: [
            'juicebox is the hardware component for lawn manager that controls the fertigation system. It is comprised of an ESP32 micro-controller connected to a range of relays, load cells and sensors to manage the state of the fertiliser system. It is controlled via MQTT with a Mosquito server running in a container on a DigitalOcean Ubuntu VPS.',
            "Lawn manager itself can communicate with the device via mqtt. Experiments were done with websockets and a REST API, but mqtt was the most reliable with the least overhead and offers sound 2-way traffic. A containerised mqttBridge microservice sits alongside the Mosquito server and relays all mqtt messages to an SNS topic so that event driven serverless microservices can be invoked. This is currently being used in a feed channel to 'soft-log' mqtt traffic.",
        ],
        stack: [
            'arduino c++',
            'platformIO',
            'MQTT',
            'ESP-32',
            'Mosquito',
            'Docker',
            'SNS',
        ],
        github: 'https://github.com/daveholst/juice-box',
        video: 'https://www.youtube.com/watch?v=p6GRGrSMjmU',
    },
]
