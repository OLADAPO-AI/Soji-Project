import React from "react";

const CreativeSolution = () => {
  return (
    <div className="min-h-screen bg-black text-text font-poppins p-6 lg:pt-16 pt-12">
      <h1 className="text-4xl font-bold text-center mt-10">
        Creative Solutions
      </h1>
      <p className="text-lg text-center mt-4">
        Transform your brand with our innovative creative solutions.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-secondary p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Website Design</h2>
          <p className="mt-2 text-base">
            Create stunning and responsive websites tailored to your brand
            identity.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Graphic Design & Branding</h2>
          <p className="mt-2 text-base">
            Develop eye-catching visuals and a strong brand presence with our
            design expertise.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">
            User Interface & Experience
          </h2>
          <p className="mt-2 text-base">
            Enhance usability and aesthetics with seamless UI/UX solutions for
            your products.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold">Brand Strategy</h2>
          <p className="mt-2 text-base">
            Develop a cohesive brand message and strategy that connects with
            your audience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreativeSolution;
