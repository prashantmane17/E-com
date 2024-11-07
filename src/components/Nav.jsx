// components/NavBar.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-transparent p-4 fixed top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-bold">My Website</span>
        </Link>
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={`text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === item.path ? 'bg-gray-900' : ''
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
