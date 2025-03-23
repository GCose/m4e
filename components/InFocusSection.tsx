import Link from "next/link";
import Image from "next/image";

interface FocusItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface InFocusSectionProps {
  items: FocusItem[];
}

const InFocusSection = ({ items }: InFocusSectionProps) => {
  return (
    <section className="sm:px-0 lg:px-40 py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-600 text-3xl uppercase font-bold mb-8">
          In Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border border-gray-200">
              <div className="relative h-48">
                <Image
                  fill
                  alt={item.title}
                  src="/images/img-6.jpg"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="mb-3">
                  <span className="inline-block text-red-600 text-xs uppercase tracking-wider font-semibold">
                    In Focus
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-red-600">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="mx-2 text-gray-500 hover:text-red-600">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="mx-2 text-red-600 hover:text-red-700">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="2"
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/in-focus"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 uppercase"
          >
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InFocusSection;
