import Link from "next/link";
import Image from "next/image";
import type { NewsCard as NewsCardType } from "../types";

interface NewsCardProps {
  news: NewsCardType;
  variant?: "default" | "featured";
}

const NewsCard = ({ news, variant = "default" }: NewsCardProps) => {
  // Add a check to handle undefined news prop
  if (!news) {
    console.error("NewsCard component received undefined news prop");
    return (
      <div className="bg-white rounded-lg shadow-sm p-4">
        <p className="text-gray-500">News item not available</p>
      </div>
    );
  }

  const { category, title, excerpt, date, image, slug, type } = news;

  if (variant === "featured") {
    return (
      <div className="group relative overflow-hidden bg-black h-[500px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="mb-2">
            <span className="inline-block bg-red-600 text-white text-xs uppercase tracking-wider px-2 py-1 mb-2">
              {category}
            </span>
            {type && (
              <span className="inline-block ml-2 text-white text-xs uppercase">
                {type.replace("-", " ")}
              </span>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <Link href={`/news/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="text-gray-300 text-sm">{date}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="group overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <Image
          fill
          alt={title}
          src="/images/img-5.jpg"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <div className="mb-3">
          <span className="inline-block text-red-600 text-xs uppercase tracking-wider font-semibold">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link
            href={`/news/${slug}`}
            className="hover:text-red-600 transition-colors"
          >
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        )}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{date}</span>
          {type && (
            <span className="uppercase text-xs bg-gray-100 px-2 py-1 rounded">
              {type.replace("-", " ")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
