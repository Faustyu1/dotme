import { getWholeWebring } from "@/data/webring"
import Link from "next/link"
import { FlowerIcon } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

export const metadata = {
    title: "My Webring",
    description: "This is a list of websites that are a part of my Webring. Contact me to join!",
}

export default async function Webring() {
    const sites = await getWholeWebring()

    return (
        <>
            <div className="flex flex-col sm:gap-1 py-8">
                <div className="flex items-center justify-between mb-4">
                    <h1 className="text-2xl sm:text-4xl font-bold flex items-center gap-3">
                        <FlowerIcon size={32} className="inline text-neutral-900 dark:text-neutral-100" />
                        My Webring
                    </h1>
                    <ThemeToggle />
                </div>
                {sites.map(site => (
                    <Link href={site.url} key={site.id} className="max-sm:py-2">
                        {"->"} <span className="font-semibold">{site.name}</span>
                        <span className="text-neutral-500"> – {site.url}</span>
                    </Link>
                ))}
                <Link href="/#socials" className="mt-4">Contact me to join {"-->"}</Link>
            </div>
        </>
    )
}
