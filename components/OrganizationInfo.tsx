import Link from "next/link";
import type { StatItem } from "../types";

interface OrganizationInfoProps {
  title: string;
  description: string;
  stats: StatItem[];
}

const OrganizationInfo = ({
  title,
  description,
  stats,
}: OrganizationInfoProps) => {
  return (
    <section id="about-us" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40">
        <div className="max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            {title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            {description}{" "}
            <span className="font-bold">
              principles of impartiality, independence and neutrality
            </span>
            .
          </p>
          <div className="mt-4">
            <Link
              href="/about-us"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 uppercase rounded-2xl transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-8 md:mt-12 border-t border-gray-200 pt-8 md:pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="uppercase text-xs tracking-wider text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationInfo;
