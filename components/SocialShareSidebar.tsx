import Link from "next/link";
import { Facebook, Twitter, Mail, Printer, Link2 } from "lucide-react";

const SocialShareSidebar = () => {
  return (
    <div className="fixed left-0 top-1/3 z-30 hidden md:block">
      <div className="bg-white shadow-lg p-4 rounded-2xl ml-4">
        <div className="mb-4">
          <h3 className="text-xs uppercase font-semibold text-gray-500 mb-2">
            SHARE THIS
          </h3>
          <div className="space-y-3">
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white"
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white"
              aria-label="Share via Email"
            >
              <Mail className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-black text-white"
              aria-label="Print"
            >
              <Printer className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <Link
          href="#"
          className="flex items-center text-red-600 hover:text-red-700 text-sm font-medium"
        >
          <Link2 className="h-4 w-4 mr-1" />
          Copy link
        </Link>
      </div>
    </div>
  );
};

export default SocialShareSidebar;
