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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
          <div className="bg-gray-100 p-8 text-center">
            <p className="text-gray-500">Featured news not available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="sm:px-0 lg:px-40 py-16 bg-white">
      <div className="container mx-auto px-4 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="relative bg-black h-[500px] rounded-4xl">
          <Image
            fill
            alt={news.title}
            src="/images/img-2.jpg"
            className="object-cover opacity-50 rounded-4xl"
          />
          <div className="absolute right-0 top-0 bg-black text-white p-4 w-1/3 h-full">
            <div className="mb-2">
              <span className="inline-block text-red-600 text-xs uppercase tracking-wider font-semibold">
                {news.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              <Link href={`/news/${news.slug}`} className="hover:underline ">
                {news.title}
              </Link>
            </h3>
            <div className="text-gray-300 text-sm">{news.date}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
