import Link from "next/link";
import Image from "next/image";

const WorkWithMSF = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[500px]">
          <Image
            fill
            alt="MSF Staff"
            className="object-cover"
            src="/images/img-10.jpg"
          />
        </div>
        <div className="bg-blue-900 text-white p-16 flex flex-col justify-center">
          <span className="text-red-500 uppercase text-sm font-semibold tracking-wider mb-4">
            WORKING WITH MSF
          </span>
          <h2 className="text-4xl font-bold mb-6">
            What is it like to work with MSF?
          </h2>
          <p className="uppercase mb-6 font-semibold">
            WE RELY ON A STRONG NETWORK OF PROFESSIONALS TO DELIVER LIFE-SAVING
            MEDICAL AID.
          </p>
          <p className="mb-8">
            Each year, thousands of international and locally-hired staff work
            together around the globe to provide lifesaving medical assistance
            to people who would otherwise be denied access to healthcare.
          </p>
          <div>
            <Link
              href="/work-with-msf"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 uppercase rounded-2xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithMSF;
