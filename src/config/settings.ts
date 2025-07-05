export const APP_SETTINGS = {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'eDemand',
    shortName: process.env.NEXT_PUBLIC_APP_SHORT_NAME || 'eDemand',
    logo: process.env.NEXT_PUBLIC_APP_LOGO || '/icon-192x192.png',
    themeColor: process.env.NEXT_PUBLIC_APP_THEME_COLOR || '#007BFF',
    backgroundColor: process.env.NEXT_PUBLIC_APP_BACKGROUND_COLOR || '#ffffff',
    display: process.env.NEXT_PUBLIC_APP_DISPLAY || 'standalone',
    startUrl: process.env.NEXT_PUBLIC_APP_START_URL || '/'
} 