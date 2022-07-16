import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    webServer: {
        // TODO might want to change this out to pnpm
        command: 'npm run build && npm run preview',
        port: 4173,
    },
}

export default config
