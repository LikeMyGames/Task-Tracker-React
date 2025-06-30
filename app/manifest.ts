import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        lang: "en-us",
        name: "Task Tracker",
        description: "A Web App that allows users to keep track of and manage their tasks",
        short_name: "Tasks",
        start_url: "/",
        orientation: "any",
        screenshots: [
            {
                src: "/icons/PWA/screenshot_wide.png",
                sizes: "3000x2000",
                type: "image/png",
                form_factor: "wide",
                // description:"Standard view of tasks"
            },
            {
                src: "/icons/PWA/screenshot_normal.png",
                sizes: "2000x2000",
                type: "image/png",
                // description:"Standard view of tasks"
            }
        ],
        shortcuts: [
            {
                name: "Docs",
                url: "/docs",
                description: "The sites documentation",
                icons: [
                    {
                        src: "/icons/favicon/favicon-rounded-96x96.png",
                        type: "image/png",
                        sizes: "96x96"
                    }
                ]
            }
        ],

        icons: [
            {
                src: "/icons/favicon/web-app-manifest-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/icons/favicon/web-app-manifest-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable"
            },
            {
                src: "/icons/favicon/web-app-manifest-1024x1024.png",
                sizes: "1024x1024",
                type: "image/png",
                purpose: "any"
            },
            {
                src: "/icons/favicon/web-app-manifest-rounded-1024x1024.png",
                sizes: "1024x1024",
                type: "image/png",
                purpose: "any"
            }
        ],
        theme_color: "#070907",
        background_color: "#070907",
        display: "standalone",
        display_override: ["fullscreen", "minimal-ui"]
    }
}