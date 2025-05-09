import ErrorBase from "@/components/error-base"
import StyledLink from "@/components/styled-link"
import { RiFileForbidLine } from "@remixicon/react"

export const metadata = {
    title: "Not found",
}

export default function NotFound() {
    return (
        <ErrorBase
            icon={RiFileForbidLine}
            title="Page not found"
        >
            Sorry, but there&apos;s no such page on my website.{" "}
            Here&apos;s a link to <StyledLink href="/"> the homepage</StyledLink>,{" "}
            or if you believe this is an error, you can{" "}
            <StyledLink href="https://t.me/faustyu">contact me</StyledLink>.
        </ErrorBase>
    )
}
