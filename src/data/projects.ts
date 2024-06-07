export interface Project {
    title: string
    description: string[]
    stack: string[]
    keyAchievements?: string[]
    github?: string
    live?: string
    video?: string
}

export const projects: Project[] = [
    {
        title: 'Woodside Energy.',
        description: [
            "At Woodside Energy I was employed as a contract Software Engineer, primarily working on the Internal Developer Platform. This included working on both the infrastructure and tooling that enabled quick 'time to market' for our internal project teams.",
            'The platform was built using a microservices architecture residing on a range of AWS infrastructure. I was responsible for developing new features and enhancements to the platform, as well as providing support and maintenance. I also worked on a range of refactor tasks with a focus on improving the developer experience, simplicity and performance of the system.',
            "Compliance and governance were a key focus of the platform, our team was responsible for surfacing potential security concerns for other development teams that were using our 'Cloud Native Factory' products . This involved the continual development and refinement of new and existing products, documenting the systems and best practices, providing examples and building backend services to provide automated checks on deployed applications.",
            'My role at Woodside Energy required me to work closely with others in a small team. I collaborated with them to develop new features, fix bugs, and optimise performance. As we had two Graduate Engineers on the team, I also provided mentorship and guidance to help them grow their skills and knowledge.',
        ],
        keyAchievements: [
            'Developed an aggregation system for recording long-term metrics on product deployments, compliance and governance.',
            'Rebuilt platform observability and metrics tool, Scout to be more user friendly and performant.',
            'Developed a new feature for the platform that automated the registration of new products and services in the businesses internal service registry.',
            'Helped refactor aspects of the platform to use a more modern stack, and increase simplicity and maintainability.',
            'Provided mentorship and guidance to Graduate Engineers on the team.',
        ],
        stack: [
            'TypeScript',
            'Go',
            'React',
            'Remix',
            'VitePress',
            'TanStack',
            'Tailwind',
            'Docker',
            'AWS: [ API Gateway, Lambda, SQS, Event Bridge, Step Functions, DynamoDB, S3, CloudWatch, CloudFront ]',
        ],
        live: 'https://woodside.com',
        video: 'https://www.youtube.com/watch?v=ZBUhISQXimw',
    },
    {
        title: 'Last Yard.',
        description: [
            'As a Product Engineer at Last Yard, I actively worked on all facets of the comprehensive retail marketing platform used by large retailers. I participated in the creation of a customer-facing React frontend, which was served from a Django backend, delivering innovative signage and marketing solutions for top-tier retailers across Australia including Woolworths, JB HiFi, and Spotlight.',
            'The platform I worked on played a pivotal role in transforming the retail environment by revolutionizing the way retailers communicate with their customers in-store. It provided a seamless and dynamic marketing experience, enabling retailers to change their store signage and marketing messages with agility and precision.',
            'My role required a high degree of collaboration with designers and other team members. We worked together to implement frontend and backend solutions for both existing features and new enhancements. This task involved a lot of problem-solving and required me to stay updated with current trends and technologies.',
            'Apart from development tasks, I also often provided on-call support to the platform team. This involved troubleshooting issues, optimizing performance, and ensuring the smooth operation of the platform infrastructure. The experience has honed my skills in problem-solving, communication, and working under pressure.',
        ],
        keyAchievements: [
            'Responding to on-call support requests and troubleshooting issues to ensure the smooth operation of the platform infrastructure.',
            'Developing MVP for a custom node driven no-code programmer for client to building product pricing algorithms.',
            'Developed a new Design System with modern technologies with both visual regression and accessibility testing.',
            'Rewrote frontend to meet WCAG guidelines and achieve certification.',
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
            'AWS: [ ec2, RDS, S3, CloudWatch ]',
        ],
        live: 'https://lastyard.com/',
    },
    {
        title: 'Seven West Media.',
        description: [
            'During my day job as a Full Stack Developer at Seven West Media, I primarily worked on a collection of both mono and traditional repos that serve thewest.com.au, sevennews.com.au, perthnow.com.au and their supporting publishing pipelines. Our front was an SSR / SPA hybrid app with a custom JSON layout routing engine for simple modifications to page layouts. Components are shared across all 3 news sites with an Emotion based design token system to help appropriately style the components.',

            'The publishing pipeline has a range of services running on ec2 instances through to event driven serverless microservices running primarily on lambdas',
            'These mastheads and supporting services deliver to over 1m unique users daily. It is an efficient architecture that focus on ephemeral serverless architecture to keep costs down and scale under periods of heavy traffic.',
        ],
        keyAchievements: [
            'Implemented a commenting system for the PerthNow site.',
            'Building a new serverless pipeline for the live blogging system that integrated with existing editorial tooling on The West.',
            'Quick turn around for frontend features and changes to synchronize with the news cycle',
        ],
        stack: ['Nx', 'TypeScript', 'React', 'Redux', 'Emotion', 'Chakra', 'Express', 'Pulumi', 'AWS Services'],
        live: 'https://thewest.com.au/',
    },
    {
        title: 'url shortener.',
        description: [
            'This project was a proof of concept to get a remix app to work on a vanilla AWS serverless based stack orchestrated via Pulumi. Remix is providing SSR via a lambda to the cloudfront instance. Cloudfront is routing static data from an s3 bucket and requesting new content from the lambda on expired cache headers. ',
            'An adapter did not exist for running remix in a vanilla AWS Lambda. This project leverages the architects event adapter that takes the lambda event and re-shapes it to the expected request shape Remix uses. Short, hashed URLs are stored with their corresponding full address in a dynamo table',
        ],
        stack: ['TypeScript', 'Remix.run', 'React', 'Stitches', 'Pulumi', 'Lambda', 'CloudFront', 'S3', 'DynamoDB'],
        github: 'https://github.com/daveholst/remix-url-shortener',
        live: 'https://link.dh.wtf/',
    },
    {
        title: 'Portfolio v3.',
        description: [
            'The most recent iteration of my personal folio site focuses on minimal design with clean code written in Svelte. I have utilised the SvelteKit framework to enable easy directory driven routing with a delightful devXP. Via an adapter, a GitHub action builds the site out to static files and moves them to a gh-pages branch where they are deployed and accessible from my personal domain',
        ],
        stack: ['Svelte', 'SvelteKit', 'Playwright', 'vitest', 'GitHub Actions', 'GitHub Pages'],
        github: 'https://github.com/daveholst/portfolio-3/',
        live: 'https://daveholst.dev/',
    },
    {
        title: 'Lawn Manager.',
        description: [
            'Lawn Manager is a lawn and garden management hardware & software solution that uses the technique of fertigation to deliver fertiliser to lawns and garden beds via existing reticulation systems. This was my final project for my bootcamp and is currently in a state of heavy refactoring.',
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
        title: 'JuiceBox.',
        description: [
            'Juicebox is the hardware component for lawn manager that controls the fertigation system. It is comprised of an ESP32 micro-controller connected to a range of relays, load cells and sensors to manage the state of the fertiliser system. It is controlled via MQTT with a Mosquito server running in a container on a DigitalOcean Ubuntu VPS.',
            "Lawn manager itself can communicate with the device via mqtt. Experiments were done with websockets and a REST API, but mqtt was the most reliable with the least overhead and offers sound 2-way traffic. A containerised mqttBridge microservice sits alongside the Mosquito server and relays all mqtt messages to an SNS topic so that event driven serverless microservices can be invoked. This is currently being used in a feed channel to 'soft-log' mqtt traffic.",
        ],
        stack: ['arduino c++', 'platformIO', 'MQTT', 'ESP-32', 'Mosquito', 'Docker', 'SNS'],
        github: 'https://github.com/daveholst/juice-box',
        video: 'https://www.youtube.com/watch?v=p6GRGrSMjmU',
    },
]
