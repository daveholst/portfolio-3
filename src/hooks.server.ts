export async function handle({ event, resolve }) {
    const response = await resolve(event, {
        preload: ({ type }) => type === 'font',
    })

    return response
}
