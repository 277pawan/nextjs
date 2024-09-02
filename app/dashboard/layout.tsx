import { Metadata } from "next"
export const metadata: Metadata = {
    title: "Dashboard Page",
    description: "Dashboard Page Of Apple."
}
export default function DashboardLayout({
    children,
}:
    {
        children: React.ReactNode
    }) {
    return (
        <section>
            {children}
        </section>
    )
}