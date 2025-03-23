import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-red-500 uppercase text-sm font-semibold tracking-wider mb-4">
              EXPLORE
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/what-we-do"
                  className="hover:text-red-400 transition-colors"
                >
                  What we do
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-activities"
                  className="hover:text-red-400 transition-colors"
                >
                  Medical activities
                </Link>
              </li>
              <li>
                <Link
                  href="/crisis-settings"
                  className="hover:text-red-400 transition-colors"
                >
                  Crisis settings
                </Link>
              </li>
              <li>
                <Link
                  href="/in-focus"
                  className="hover:text-red-400 transition-colors"
                >
                  In focus
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 uppercase text-sm font-semibold tracking-wider mb-4">
              ABOUT MSF
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/who-we-are"
                  className="hover:text-red-400 transition-colors"
                >
                  Who we are
                </Link>
              </li>
              <li>
                <Link
                  href="/how-were-run"
                  className="hover:text-red-400 transition-colors"
                >
                  How we are run
                </Link>
              </li>
              <li>
                <Link
                  href="/how-we-work"
                  className="hover:text-red-400 transition-colors"
                >
                  How we work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-red-400 transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-red-500 uppercase text-sm font-semibold tracking-wider mb-4">
              GET INVOLVED
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/work-with-msf"
                  className="hover:text-red-400 transition-colors"
                >
                  Work with MSF
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="hover:text-red-400 transition-colors"
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <Image
                src="/placeholder.svg?height=80&width=160"
                alt="MSF Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
            <address className="not-italic text-gray-400 text-sm mb-6">
              <p>140, Route de Ferney, 1202 Geneva, Switzerland</p>
              <p>Federal identification number: UID-CH-660.1.555.004-1</p>
            </address>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm uppercase transition-colors"
            >
              PRIVACY POLICY
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © Médecins Sans Frontières
          </div>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">RSS</span>
              <Rss className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
