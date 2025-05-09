import "./globals.css"

import { Inter } from "next/font/google"
import React from "react"
import Providers from "@/app/providers"
import { Metadata } from "next"
import Script from "next/script"
import { env } from "@/env.mjs"
import WebringNav from "@/components/webring-nav"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // noinspection HtmlRequiredTitleElement
    return (
        <html lang="en" className="scroll-smooth">
            <head />
            {env.UMAMI_SCRIPT_URL && env.UMAMI_WEBSITE_ID && (
                <Script src={env.UMAMI_SCRIPT_URL} data-website-id={env.UMAMI_WEBSITE_ID} />
            )}
            <body className={`${inter.className} dark:bg-neutral-950 bg-white dark:text-white`}>
                <Providers>
                    <main
                        className="max-w-4xl mx-auto px-8 pb-8 min-h-screen
                        selection:bg-neutral-300 selection:text-black
                        dark:selection:bg-neutral-700 dark:selection:text-white"
                    >
                        {children}
                    </main>
                    <WebringNav />
                </Providers>
            </body>
        </html>
    )
}

export const metadata: Metadata = {
    title: {
        default: "Daniil Shashimov | @faustyu",
        template: "%s | @faustyu",
    },
    description: "Daniil Shashimov is a thoughts of part-time online troll. from Samara, Russia.",
}
