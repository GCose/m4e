import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "../types";
import { Search, ChevronDown, User } from "lucide-react";

const navItems: NavItem[] = [
  {
    label: "ABOUT US",
    href: "/about-us",
    children: [],
  },
  {
    label: "WHAT WE DO",
    href: "/what-we-do",
    children: [],
  },
  {
    label: "WHERE WE WORK",
    href: "/where-we-work",
    children: [],
  },
  { label: "RESOURCES", href: "/resources" },
  { label: "LATEST", href: "/news" },
  { label: "EVENTS", href: "/events" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoggedIn] = useState(false);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="hover:text-red-500 transition flex items-center"
              >
                <User className="h-4 w-4 mr-1" />
                <span>My Account</span>
              </Link>
            ) : (
              <>
                <Link href="/login" className="hover:text-red-500 transition">
                  Login
                </Link>
                <Link
                  href="/register"
                  className="hover:text-red-500 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <Link
              href="/work-with-msf"
              className="hover:text-red-500 transition uppercase"
            >
              Work with MSF
            </Link>
            <Link
              href="/websites"
              className="hover:text-red-500 transition uppercase"
            >
              MSF Websites
            </Link>
            <div className="flex items-center space-x-2">
              <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                EN
              </span>
              <Link
                href="/language/arabic"
                className="hover:text-red-500 transition"
              >
                العربية
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-12 w-36">
                <Image
                  width={144}
                  height={48}
                  alt="MSF Logo"
                  className="object-contain"
                  src="/images/logo.jpg"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center text-gray-800 hover:text-red-600 font-medium transition-colors"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    {item.label}
                    {item.children && item.children.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>

              <Link
                href="/donate"
                className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md transition-colors uppercase"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
