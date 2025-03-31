import React from "react";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-black text-text font-poppins p-6 lg:pt-16 pt-12">
      <h1 className="text-4xl font-bold text-center mt-10">
        Digital Marketing
      </h1>
      <p className="text-lg text-center mt-4 max-w-2xl mx-auto">
        Boost your brand’s online presence with our expert digital marketing
        services.
      </p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-6 shadow-lg rounded-lg bg-secondary">
          <h2 className="text-2xl font-semibold">SEO and Content Strategy</h2>
          <p className="mt-2 text-sm">
            Improve your search rankings and engage audiences with high-quality
            content.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-secondary">
          <h2 className="text-2xl font-semibold">Social Media Management</h2>
          <p className="mt-2 text-sm">
            Expand your reach and interact with customers across all social
            platforms.
          </p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-secondary">
          <h2 className="text-2xl font-semibold">PPC and Online Campaigns</h2>
          <p className="mt-2 text-sm">
            Drive targeted traffic with paid advertising strategies tailored for
            success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
