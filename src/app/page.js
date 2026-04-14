'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

   
    const isHome = pathname === '/' || pathname === '/home';
    const isTimeline = pathname === '/timeline';
    const isStats = pathname === '/stats';

    const activeClass = "bg-[#2D4F3F] text-white shadow-sm";
    const inactiveClass = "text-slate-500 hover:text-green-700 hover:bg-gray-100";

    const links = (
        <>
            <li>
               
                <Link href="/" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all uppercase text-[11px] ${isHome ? activeClass : inactiveClass}`}>
                    <Image 
                        src="/home.png" 
                        alt="Home" 
                        width={13} 
                        height={13} 
                        className={isHome ? "brightness-0 invert" : ""} 
                    />
                    HOME
                </Link>
            </li>
            <li>
                <Link href="/timeline" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all uppercase text-[11px] ${isTimeline ? activeClass : inactiveClass}`}>
                    <Image 
                        src="/time.png" 
                        alt="Timeline" 
                        width={13} 
                        height={13} 
                        className={isTimeline ? "brightness-0 invert" : ""} 
                    />
                    TIMELINE
                </Link>
            </li>
            <li>
                <Link href="/stats" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-medium transition-all uppercase text-[11px] ${isStats ? activeClass : inactiveClass}`}>
                    <Image 
                        src="/status.png" 
                        alt="Stats" 
                        width={13} 
                        height={13} 
                        className={isStats ? "brightness-0 invert" : ""} 
                    />
                    STATS
                </Link>
            </li>
        </>
    );

    return (
        <nav className="bg-white border-b border-gray-100 px-6 py-2 flex items-center justify-between sticky top-0 z-50">
            <div className="flex items-center">
                <Link href="/" className="group">
                    <Image src="/logo.png" alt="Logo" width={120} height={26} />
                </Link>
            </div>

            <div className="flex items-center gap-2">
                <ul className="flex items-center gap-1 bg-gray-50 p-1 rounded-lg border border-gray-100">
                    {links}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;