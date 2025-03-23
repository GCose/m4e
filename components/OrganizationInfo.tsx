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
    <section className="py-16 bg-white">
      <div className="container mx-auto sm:px-0 lg:px-40">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-gray-600 mb-6">
            {description}{" "}
            <span className="font-bold">
              principles of impartiality, independence and neutrality
            </span>
            .
          </p>
          <div className="mt-4">
            <Link
              href="/about-us"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 uppercase rounded-2xl"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8 mt-12 border-t border-gray-200 pt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
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
