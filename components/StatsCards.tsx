"use client";

export default function StatsCards() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 py-10">

      {/* Card 1 */}
      <div className="group relative bg-gray-100 rounded-3xl px-8 py-8 w-[320px] shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl">
        <div className="absolute inset-0 bg-[#5ad9ff] w-0 group-hover:w-full transition-all duration-500"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-teal-600 group-hover:text-white transition-colors">
            10+
          </h2>
          <h3 className="text-2xl font-semibold mt-1 group-hover:text-white transition-colors">
            Years
          </h3>
          <p className="mt-2 text-gray-700 group-hover:text-white transition-colors">
            We Teach Quran Online for 10+ Years Worldwide.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative bg-gray-100 rounded-3xl px-8 py-8 w-[320px] shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl">
        <div className="absolute inset-0 bg-[#5ad9ff] w-0 group-hover:w-full transition-all duration-500"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-teal-600 group-hover:text-white transition-colors">
            650+
          </h2>
          <h3 className="text-2xl font-semibold mt-1 group-hover:text-white transition-colors">
            Students
          </h3>
          <p className="mt-2 text-gray-700 group-hover:text-white transition-colors">
            In our Quran Academy we have 650+ satisfied students.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative bg-gray-100 rounded-3xl px-8 py-8 w-[320px] shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl">
        <div className="absolute inset-0 bg-[#5ad9ff] w-0 group-hover:w-full transition-all duration-500"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold text-teal-600 group-hover:text-white transition-colors">
            60+
          </h2>
          <h3 className="text-2xl font-semibold mt-1 group-hover:text-white transition-colors">
            Teachers
          </h3>
          <p className="mt-2 text-gray-700 group-hover:text-white transition-colors">
            We have a 60+ team of Qualified Male and Female Quran teachers
          </p>
        </div>
      </div>

    </div>
  );
}
