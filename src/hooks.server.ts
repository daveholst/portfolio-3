export async function handle({ event, resolve }) {
    const response = await resolve(event, {
        preload: ({ type, path }) =>
            type === 'font' || path.includes('/fonts/'),
    })

    return response
}
