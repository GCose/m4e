import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, List } from "lucide-react";
import SocialShareSidebar from "./SocialShareSidebar";

const WhereWeWork = () => {
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  return (
    <section className="py-16 bg-white relative">
      <SocialShareSidebar />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 sm:text-left lg:text-center">
          Where we work
        </h2>
        <p className="text-lg mb-8 max-w-3xl sm:text-left lg:text-center lg:m-auto">
          In more than 70 countries, Médecins Sans Frontières provides medical
          humanitarian assistance to save lives and ease the suffering of people
          in crisis situations.
        </p>
        <div className="mt-8 mb-8 sm:text-left lg:text-center">
          <Link
            href="/where-we-work/countries"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 uppercase text-sm rounded-2xl"
          >
            View All Countries
          </Link>
        </div>

        <div className="bg-white sm:px-0 lg:px-40 py-16">
          <div className="flex justify-end p-2 border-b">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setViewMode("list")}
                className={`px-4 py-2 text-sm font-medium border ${
                  viewMode === "list"
                    ? "bg-gray-100 text-gray-700 border-gray-300"
                    : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <List className="h-5 w-5 inline-block mr-2" />
                <span>LIST VIEW</span>
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`px-4 py-2 text-sm font-medium border ${
                  viewMode === "map"
                    ? "bg-gray-100 text-gray-700 border-gray-300"
                    : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                }`}
              >
                <Globe className="h-5 w-5 inline-block mr-2" />
                <span>MAP VIEW</span>
              </button>
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl">
            <Image
              fill
              src="/images/img-9.jpg"
              alt="MSF Operations Map"
              className="object-cover rounded-4xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeWork;
