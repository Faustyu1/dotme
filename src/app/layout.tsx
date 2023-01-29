import './globals.css'

import {Inter} from '@next/font/google'
import React from "react";
import Providers from "@/app/providers";

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: { children: React.ReactNode }) {
    // noinspection HtmlRequiredTitleElement
    return (
        <html lang="en">
            <head />
            <body className={inter.className}>
                <Providers>
                    <main className="max-w-4xl mx-auto p-8">
                        {children}
                    </main>
                </Providers>
            </body>
        </html>
    )
}
