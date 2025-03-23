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
    <div className="relative min-h-screen">
      <Image
        fill
        alt={title}
        className="object-cover z-0"
        src={imageUrl || "/placeholder.svg"}
      />
      {/* Linear gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
      <div className="absolute inset-0 flex items-center sm:px-0 lg:px-40 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-white">
              <div className="mb-4 flex items-center">
                <div className="w-6 h-0.5 bg-red-500 mr-2"></div>
                <span className="text-white">{category}</span>
              </div>
              <h1 className="text-5xl font-bold leading-tight mb-8">{title}</h1>
            </div>
            <div className="text-white">
              <div className="mb-4 flex justify-between">
                <span>{type}</span>
                <span>{date}</span>
              </div>
              <p className="text-lg mb-8">{description}</p>
              <Link
                href="#"
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 uppercase"
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
