'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItem = (href, label, icon) => {
    const isActive = pathname === href;

    return (
      <li>
        <Link
          href={href}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isActive
              ? 'bg-[#1e3d33] text-white shadow-md'
              : 'text-gray-500 hover:bg-gray-100'
          }`}
        >
          <Image
            src={icon}
            alt={label}
            width={16}
            height={16}
            className={`${isActive ? 'brightness-0 invert' : ''}`}
          />
          {label}
        </Link>
      </li>
    );
  };

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}
      <Link href="/home">
        <Image src="/logo.png" alt="Logo" width={141} height={31} />
      </Link>

      {/* Nav */}
      <ul className="flex items-center gap-2 bg-gray-50 p-2 rounded-full border border-gray-100">
        {navItem('/home', 'Home', '/home.png')}
        {navItem('/timeline', 'Timeline', '/time.png')}
        {navItem('/stats', 'Stats', '/status.png')}
      </ul>

    </nav>
  );
};

export default Navbar;