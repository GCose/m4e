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
      <div className="container mx-auto px-4">
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
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 uppercase"
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

        <div className="mt-8 border-t border-gray-200 pt-8">
          <div className="flex items-center">
            <div className="mr-4 text-red-600">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <span className="block">International Activity Report 2023</span>
              <Link
                href="#"
                className="inline-flex items-center mt-1 text-sm font-semibold text-red-600 hover:text-red-700"
              >
                READ REPORT
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationInfo;
