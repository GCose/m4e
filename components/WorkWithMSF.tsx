import Link from "next/link";
import Image from "next/image";

const WorkWithMSF = () => {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[500px]">
          <Image
            src="/placeholder.svg?height=500&width=600"
            alt="MSF Staff"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-16 left-16 z-10">
            <div className="flex flex-col items-start">
              <span className="text-white text-xs uppercase tracking-wider mb-2">
                VIDEO
              </span>
              <button className="bg-red-600 hover:bg-red-700 transition-colors w-16 h-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-8 h-8"
                >
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-black bg-opacity-50">
            <h3 className="text-white text-xl">
              Welcome to Médecins Sans Frontières/Doctors Without Borders
            </h3>
          </div>
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
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 uppercase"
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
