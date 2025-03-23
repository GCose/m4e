import Image from "next/image";
import Link from "next/link";
import type { NewsCard as NewsCardType } from "../../types";
import SocialShareSidebar from "../SocialShareSidebar";
import NewsletterSubscription from "../NewsletterSubscription";

interface NewsDetailPageProps {
  news: NewsCardType;
  relatedNews: NewsCardType[];
}

const NewsDetailPage = ({ news, relatedNews }: NewsDetailPageProps) => {
  if (!news) {
    return <div>News article not found</div>;
  }

  return (
    <div className="relative">
      <SocialShareSidebar />

      <article className="pt-8 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="mb-4">
              <span className="inline-block text-red-600 text-sm uppercase tracking-wider font-semibold">
                {news.category}
              </span>
              {news.type && (
                <span className="inline-block ml-4 text-gray-500 text-sm">
                  {news.type.replace("-", " ").toUpperCase()}
                </span>
              )}
              <span className="inline-block ml-4 text-gray-500 text-sm">
                {news.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {news.title}
            </h1>
            {news.excerpt && (
              <p className="text-xl text-gray-600 mb-6">{news.excerpt}</p>
            )}
          </div>

          {/* Featured Image */}
          <div className="max-w-5xl mx-auto mb-12 relative aspect-[16/9]">
            <Image
              src={news.image || "/placeholder.svg"}
              alt={news.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              With WHO estimating that only half of the 1.25 million children
              and young adolescents who fall ill with TB each year being
              diagnosed, MSF is calling for sustaining investment in paediatric
              TB.
            </p>
            <p>
              Tuberculosis (TB) is a preventable and curable disease, yet it
              remains one of the world{"'"}s deadliest infectious diseases,
              killing 1.3 million people in 2022. Children are particularly
              vulnerable to TB, with an estimated 1.25 million children and
              young adolescents (aged 0-14 years) falling ill with TB each year.
            </p>
            <p>
              Despite progress in recent years, only about half of these
              children are diagnosed and started on treatment, leaving hundreds
              of thousands of children without the care they need. This is
              largely due to the challenges in diagnosing TB in children, as
              symptoms can be non-specific and similar to other common childhood
              illnesses.
            </p>
            <h2>Challenges in diagnosing TB in children</h2>
            <p>
              Diagnosing TB in children is challenging for several reasons.
              Children often have difficulty producing sputum samples needed for
              traditional TB tests, and when they do, the samples often contain
              fewer TB bacteria than those from adults, making detection more
              difficult.
            </p>
            <p>
              Additionally, TB in children can present with non-specific
              symptoms that mimic other common childhood illnesses, such as
              pneumonia, malnutrition, or HIV. This can lead to delays in
              diagnosis and treatment, which can have serious consequences for
              children{"'"}s health.
            </p>
            <blockquote>
              <p>
                We need to ensure that children with TB are not left behind.
                This means investing in child-friendly diagnostic tools,
                training healthcare workers to recognize TB in children, and
                ensuring that child-friendly TB treatments are available and
                accessible to all children who need them.
              </p>
              <cite>Dr. Jane Smith, MSF Medical Director</cite>
            </blockquote>
          </div>
        </div>
      </article>

      {/* Newsletter Subscription */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <NewsletterSubscription />
        </div>
      </div>

      {/* Related News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Related News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedNews.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3">
                    <span className="inline-block text-red-600 text-xs uppercase tracking-wider font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <Link
                      href={`/news/${item.slug}`}
                      className="hover:text-red-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <div className="text-sm text-gray-500">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsDetailPage;
