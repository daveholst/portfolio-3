export interface Project {
    title: string
    description: string[]
    stack: string[]
    github: string
    live?: string
    video?: string
}

export const projects: Project[] = [
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
        description: ['the most recent iteration of my personal folio '],
        stack: [
            'SvelteKit',
            'Playwright',
            'vitest',
            'pulumi',
            'cloudFront',
            'S3',
        ],
        github: 'https://github.com/daveholst/remix-url-shortener',
        // live: 'https://link.dh.wtf/',
    },
    {
        title: 'juicebox.',
        description: [
            'this project was a proof of concept to get a remix app to work on a vanilla AWS serverless based stack orchestrated via Pulumi. ',
        ],
        stack: ['remix', 'react', 'stitches'],
        github: 'https://github.com/daveholst/juice-box',
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
]
