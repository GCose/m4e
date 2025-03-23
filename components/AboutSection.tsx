import Link from "next/link";

interface AboutSectionProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

const AboutSection = ({
  title,
  description,
  ctaText = "LEARN MORE",
  ctaLink = "#",
}: AboutSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg text-gray-600 mb-8">{description}</p>
          <div className="flex justify-center">
            <Link
              href={ctaLink}
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
