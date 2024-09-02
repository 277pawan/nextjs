'use client'
import { usePathname } from "next/navigation"

const DynamicPage = () => {
    const pathname = usePathname();
    const segments = pathname.split("/").filter((segment) => segment !== "");
    const name = decodeURIComponent(segments.pop() || "");
    return <h1>This is my name:- {name}</h1>
}
export default DynamicPage