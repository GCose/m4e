import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "../types";
import { Search, ChevronDown, User, Menu, X } from "lucide-react";

const navItems: NavItem[] = [
  {
    label: "ABOUT US",
    href: "#about-us",
    children: [],
  },
  {
    label: "WHAT WE DO",
    href: "#what-we-do",
    children: [],
  },
  {
    label: "WHERE WE WORK",
    href: "#where-we-work",
    children: [],
  },
  { label: "RESOURCES", href: "#resources" },
  { label: "LATEST", href: "#latest" },
  { label: "EVENTS", href: "#events" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about-us");

  // Handle scroll effect for navbar and track active section
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar shrinking on scroll
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find the active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));

      // Get all section elements
      const sectionElements = sections
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      // Determine which section is in the viewport
      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on mount to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);

    // Handle smooth scrolling to section
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
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
                <Link href="/auth" className="hover:text-red-500 transition">
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="hover:text-red-500 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
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
      <header
        className={`bg-white shadow-sm sticky top-0 z-50 transition-all ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-12 w-36">
                <Image
                  width={100}
                  height={48}
                  alt="MSF Logo"
                  src="/images/logo.jpg"
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <div key={item.label} className="relative group">
                    <button
                      className={`flex items-center font-medium transition-colors ${
                        isActive
                          ? "text-red-600 font-bold"
                          : "text-gray-800 hover:text-red-600"
                      }`}
                      onClick={() => {
                        toggleDropdown(item.label);
                        scrollToSection(item.href);
                      }}
                    >
                      {item.label}
                      {item.children && item.children.length > 0 && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </button>
                    {/* Active indicator line */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-red-600"></div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-red-600 transition-colors">
                <Search className="h-5 w-5" />
              </button>

              <Link
                href="/donate"
                className="hidden md:block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-2xl transition-colors uppercase"
              >
                Donate
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-red-600"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white py-4 border-t shadow-md">
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`font-medium py-2 ${
                        isActive
                          ? "text-red-600 font-bold border-l-2 border-red-600 pl-2"
                          : "text-gray-800 hover:text-red-600"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="flex flex-col space-y-4 pt-4 border-t">
                  <Link
                    href="/work-with-msf"
                    className="text-gray-800 hover:text-red-600 transition uppercase"
                  >
                    Work with MSF
                  </Link>
                  <Link
                    href="/websites"
                    className="text-gray-800 hover:text-red-600 transition uppercase"
                  >
                    MSF Websites
                  </Link>
                  <Link
                    href="/donate"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-2xl transition-colors uppercase text-center"
                  >
                    Donate
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
