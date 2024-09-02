'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className='p-2 bg-blue-950 text-center flex justify-center place-items-center gap-4 '>
            <Link className={`link ${pathname === '/' ? 'border-b-2 border-b-green-400' : ''}`} href="/">
                Home
            </Link>

            <Link className={`link ${pathname === '/dashboard' ? 'border-b-2 border-b-green-400' : ''}`} href="/dashboard">
                Dashboard
            </Link>
        </nav>
    );
}
