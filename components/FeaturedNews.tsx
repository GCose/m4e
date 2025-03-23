import Link from "next/link";
import Image from "next/image";
import type { NewsCard as NewsCardType } from "../types";

interface FeaturedNewsProps {
  title: string;
  news: NewsCardType;
}

const FeaturedNews = ({ title, news }: FeaturedNewsProps) => {
  if (!news) {
    return (
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">
            {title}
          </h2>
          <div className="bg-gray-100 p-4 md:p-8 text-center">
            <p className="text-gray-500">Featured news not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">{title}</h2>
        <div className="relative bg-black rounded-xl md:rounded-2xl overflow-hidden">
          {/* Mobile layout (stacked) */}
          <div className="flex flex-col md:hidden">
            <div className="relative h-64">
              <Image
                fill
                alt={news.title}
                src="/images/img-2.jpg"
                className="object-cover opacity-50"
              />
            </div>
            <div className="bg-black text-white p-6">
              <div className="mb-2">
                <span className="inline-block text-red-600 text-xs uppercase tracking-wider font-semibold">
                  {news.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                <Link href={`/news/${news.slug}`} className="hover:underline">
                  {news.title}
                </Link>
              </h3>
              <div className="text-gray-300 text-sm">{news.date}</div>
            </div>
          </div>

          {/* Desktop layout (side by side) */}
          <div className="hidden md:block relative h-[400px] lg:h-[500px]">
            <Image
              fill
              alt={news.title}
              src="/images/img-2.jpg"
              className="object-cover opacity-50"
            />
            <div className="absolute right-0 top-0 bg-black text-white p-6 lg:p-8 w-5/12 lg:w-1/3 h-full">
              <div className="mb-2">
                <span className="inline-block text-red-600 text-xs uppercase tracking-wider font-semibold">
                  {news.category}
                </span>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                <Link href={`/news/${news.slug}`} className="hover:underline">
                  {news.title}
                </Link>
              </h3>
              <div className="text-gray-300 text-sm">{news.date}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
