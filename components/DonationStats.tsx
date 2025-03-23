import Link from "next/link";

const DonationStats = () => {
  return (
    <section className="sm:px-0 lg:px-40 py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold italic mb-6">
              How your donations are used
            </h2>
            <p className="mb-8">
              Your donations pay for millions of consultations, surgeries,
              treatments and vaccinations every year.
            </p>
            <Link
              href="/how-we-spend"
              className="inline-flex items-center uppercase text-sm font-semibold tracking-wider"
            >
              Find Out More
              <div className="ml-2 w-8 h-0.5 bg-red-500"></div>
            </Link>
          </div>
          <div className="md:col-span-3 grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">80%</div>
              <div className="uppercase text-xs tracking-wider text-gray-400">
                Social Mission
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">15%</div>
              <div className="uppercase text-xs tracking-wider text-gray-400">
                Fundraising
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">5%</div>
              <div className="uppercase text-xs tracking-wider text-gray-400">
                Management & General Admin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationStats;
