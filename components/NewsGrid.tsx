import Link from "next/link";
import type { NewsCard as NewsCardType } from "../types";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  title: string;
  news: NewsCardType[];
  viewMoreLink?: string;
}

const NewsGrid = ({
  title,
  news = [],
  viewMoreLink = "/latest",
}: NewsGridProps) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold uppercase">{title}</h2>
          <Link
            href={viewMoreLink}
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 uppercase"
          >
            View More
          </Link>
        </div>

        {news.length === 0 ? (
          <div className="bg-white p-8 text-center">
            <p className="text-gray-500">No news items available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {news.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8">
          <button className="mx-2 text-gray-500 hover:text-red-600">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="mx-2 text-red-600 hover:text-red-700">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
