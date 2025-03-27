import { FaDotCircle } from "react-icons/fa";
import { insightData } from "../data";
import { Link } from "react-router-dom";

const InsightsSection = () => {
  return (
    <section className="min-h-screen bg-white/90 rounded-t-3xl py-20 lg:px-20 px-6 sm:px-10">
      <div className="flex flex-col w-full">
        {/* Section Header */}
        <div className="pb-8">
          <div className="flex text-accent items-center flex-row gap-4 text-[12px] lg:text-sm font-semibold">
            <FaDotCircle />
            <span className="uppercase text-gray-500">Featured News</span>
          </div>
          <div className="pt-4 font-bold text-3xl capitalize">
            Latest News and Insights
          </div>
        </div>

        {/* Insights List */}
        {insightData.map((data, i) => (
          <div key={i} className="flex flex-col ">
            <span className="bg-gray-400 h-[1px] w-full"></span>
            <div className="grid lg:gap-20 div sm:gap-10 gap-2 py-8 grid-cols-1 sm:grid-cols-5">
              {/* Image Section */}
              <Link to={data.link} className="sm:col-span-2">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-[200px] rounded-xl w-full lg:w-4/5 object-cover"
                />
              </Link>

              {/* Content Section */}
              <div className="sm:col-span-3 py-2 relative">
                {data.category && (
                  <div className="flex text-yellow-600 items-center flex-row md:py-3 gap-4 lg:text-sm text-[12px] font-semibold">
                    <FaDotCircle />
                    <span className="uppercase text-gray-500">
                      {data.category}
                    </span>
                  </div>
                )}
                <Link
                  to={data.link}
                  className="md:pt-4 py-2 hover:underline text-base lg:text-lg font-semibold tracking-wider font-sans"
                >
                  {data.title}
                </Link>
                {/* <p className="text-gray-600 text-sm">{data.description}</p> */}

                {/* Author Info */}
                <div className="flex md:pt-10 mt-auto flex-row items-center">
                  <img
                    src={data.author.avatar}
                    alt={data.author.name}
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <p className="rounded-xl bg-white text-center px-4 my-auto py-1 ml-2 text-gray-500 text-sm">
                    {data.author.name}
                  </p>
                  <p className="rounded-xl bg-white text-center px-4 my-auto py-1 ml-2 text-gray-500 text-sm">
                    {data.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
