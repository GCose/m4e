import Link from "next/link";
import Image from "next/image";

interface ArticleHeaderProps {
  category: string;
  title: string;
  date: string;
  type: string;
  description: string;
  imageUrl: string;
}

const ArticleHeader = ({
  category,
  title,
  date,
  type,
  description,
  imageUrl,
}: ArticleHeaderProps) => {
  return (
    <div className="relative min-h-[80vh] md:min-h-screen">
      <Image
        fill
        priority
        alt={title}
        className="object-cover z-0"
        src={imageUrl || "/placeholder.svg"}
      />
      {/* Linear gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40 md:from-black/50 md:to-black/30 z-10"></div>

      <div className="absolute inset-0 flex items-center z-20 px-4 sm:px-0 lg:px-40">
        <div className="container mx-auto px-0 sm:px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="text-white">
              <div className="mb-2 md:mb-4 flex items-center">
                <div className="w-4 md:w-6 h-0.5 bg-red-500 mr-2"></div>
                <span className="text-white text-sm md:text-base">
                  {category}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 md:mb-8">
                {title}
              </h1>
            </div>
            <div className="text-white">
              <div className="mb-2 md:mb-4 flex justify-between text-sm md:text-base">
                <div className="mb-2 md:mb-4 flex items-center">
                  <div className="w-4 md:w-6 h-0.5 bg-red-500 mr-2"></div>
                  <span className="text-white text-sm md:text-base">
                    {type}
                  </span>
                </div>
                <span>{date}</span>
              </div>
              <p className="text-base md:text-lg mb-6 md:mb-8">{description}</p>
              <Link
                href="#"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-2xl uppercase text-sm md:text-base transition-all"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
