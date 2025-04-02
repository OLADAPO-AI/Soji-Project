import React from "react";

const services = [
  {
    title: "Print Design",
    description:
      "Our print design services include concept work, brochure and leaflet design, advertising graphics, merchandise design, and more. We also work with professional printers to guarantee a quality final product worthy of representing your brand.",
  },
  {
    title: "Packaging Design",
    description:
      "Your packaging should convey everything your brand is about while helping your product stand out on crowded shelves. We oversee the entire packaging design process to maintain quality and consistency at every stage.",
  },
  {
    title: "Graphic Design",
    description:
      "From logos to marketing materials, we craft compelling visuals that strengthen your brand identity. Our graphic design services help businesses stand out with bold, creative, and effective designs.",
  },

  {
    title: "Responsive Design",
    description:
      "Ensure a consistent user experience across all devices with a fully responsive website that adapts seamlessly to different screen sizes and resolutions.",
  },
  {
    title: "Accessible Web Design",
    description:
      "Create an inclusive website that meets WCAG accessibility standards, ensuring ease of navigation and usability for all users, regardless of ability.",
  },
  {
    title: "UX Design",
    description:
      "Improve user satisfaction by optimizing your website’s structure and flow, guiding visitors toward their goals with a smooth and engaging browsing experience.",
  },
];

const DesignCard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6 md:p-12">
      {/* Header Section */}
      <div className=" max-w-2xl">
        <h1 className="text-2xl md:text-4xl">Meeting all your design needs</h1>
        <p className="mt-4 text-gray-600 text-sm">
          Striking designs are crucial for creating a strong first impression
          and leaving a lasting impact on your customers. Our experts specialize
          in crafting unique designs that will make your business stand out and
          engage customers in ways that align with your brand messaging and
          goals.
        </p>
      </div>

      {/* Service Cards */}
      <div className="lg:mt-16 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border border-gray-200"
          >
            <span className="text-xs font-medium text-pink-500 uppercase">
              Service
            </span>
            <h2 className="text-2xl font-semibold mt-2">{service.title}</h2>
            <p className="text-gray-600 text-sm mt-3">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignCard;
