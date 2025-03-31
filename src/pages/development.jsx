import React from "react";

const offerings = [
  {
    title: "Web Development",
    desc: " Build fast, secure, and scalable websites with modern technologies.",
  },
  {
    title: "Mobile App Development",
    desc: " Create intuitive and high-performing mobile applications for iOS and Android.",
  },
  {
    title: "E-commerce and CMS Solutions",
    desc: "Develop seamless online stores and content management systems tailored to your needs.",
  },
];

function Development() {
  return (
    <div className="min-h-screen bg-black text-text font-poppins p-6 lg:pt-16 pt-12">
      <h1 className="text-4xl font-bold text-center mt-10">
        Development Services
      </h1>
      <p className="text-lg text-center mt-4">
        We offer cutting-edge development solutions to bring your ideas to life.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offerings.map((serv, i) => {
          return (
            <div
              key={i}
              className="bg-secondary p-6 rounded-lg shadow-lg text-center"
            >
              <h2 className="text-2xl font-semibold">{serv.title}</h2>
              <p className="mt-2 text-base">{serv.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Development;
