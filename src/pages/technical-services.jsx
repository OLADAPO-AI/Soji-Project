import React from "react";

const TechnicalServices = () => {
  return (
    <div className="min-h-screen bg-black text-text font-poppins p-6 lg:pt-16 pt-12">
      <div className="max-w-6xl mt-10 mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Technical Services</h1>
        <p className="text-lg mb-8">
          Ensuring robust IT solutions for businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-secondary-dark rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              IT Support and Maintenance
            </h2>
            <p className="text-sm">
              Reliable support to keep your systems running smoothly.
            </p>
          </div>
          <div className="p-6 bg-secondary-dark rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Cybersecurity</h2>
            <p className="text-sm">
              Protecting your digital assets from cyber threats.
            </p>
          </div>
          <div className="p-6 bg-secondary-dark rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-2">
              Cloud Infrastructure
            </h2>
            <p className="text-sm">
              Scalable cloud solutions for business efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalServices;
