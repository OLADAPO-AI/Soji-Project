import React from "react";
import CardGrid from "../component/CardGrid";
import Footer from "../component/Footer";
import LinkBtn from "../component/socialLinkBtn";
const Contact = () => {
  return (
    <main className=" bg-gray-100 flex flex-col items-center justify-center pt-40 min-h-screen w-screen text-gray-900">
      <div className="container">
        {/* First Section */}
        <section className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* First Row */}
            <div className="flex  flex-col justify-between gap-1 w-full lg:w-1/2">
              <div className=" flex-1 min-w-[200px]">
                <h3 className="text-4xl lg:text-5xl mb-8 font-bold text-gray-700">
                  Want to discuss a project?
                </h3>
                <p className="text-lg mt-4 text-gray-500">
                  Tell us a little about your project and one of our team will
                  be in touch with you as soon as possible.
                </p>
              </div>
              <div className=" px-6 flex flex-col gap-8 mb-20  flex-1 min-w-[200px]">
                <div>
                  <h6 className="text-xl  font-semibold text-gray-700 ">
                    General Enquiries
                  </h6>
                  <p className="text-lg underline text-gray-500 mb-2">
                    bighead@gmail.com{" "}
                  </p>
                </div>
                <div>
                  <h6 className="text-xl font-semibold text-gray-700 ">
                    Support Enquiries
                  </h6>
                  <p className="text-lg underline text-gray-500 mb-2">
                    bighead@gmail.com{" "}
                  </p>
                </div>
                <div>
                  <h6 className="text-xl font semibold text-gray-700 ">
                    Interested in joining the team ?
                  </h6>
                  <p className="text-lg underline text-gray-500 mb-2">
                    bighead@gmail.com{" "}
                  </p>
                </div>
              </div>
              <div className=" p-6 rounded-2xl shadow-md flex-1 min-w-[200px]">
                <LinkBtn title={"twitter"} bg={"blue-600"}></LinkBtn>
              </div>
            </div>

            {/* Second Row - Optimized Form */}
            <div className=" p-8 rounded-2xl shadow-lg w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <form className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 bg-white border rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full p-3 border bg-white rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border bg-white rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    className="w-full p-3 border bg-white rounded-xl"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    className="w-full p-3 border bg-white rounded-xl h-32"
                  ></textarea>
                </div>
                <div className="relative">
                  <label className="block font-medium mb-1">
                    Type of Project <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full p-3 pr-10 border rounded-xl appearance-none"
                    >
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                      ▼
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <label className="block font-medium mb-1">
                    How did you hear about us{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full p-3 pr-10 border rounded-xl appearance-none"
                    >
                      <option value="">Please select</option>
                      <option value="Friend/Colleague">Friend/Colleague</option>
                      <option value="Search Engine">Search Engine</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Printed Material">Printed Material</option>
                      <option value="Radio">Radio</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                      ▼
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block font-medium mb-1">
                    Tell us about your project{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Please include any details that would be beneficial for us
                    to know.
                  </p>
                  <textarea
                    required
                    className="w-full p-3 border rounded-xl h-32"
                  ></textarea>
                </div>

                <div className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <label className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 underline">
                      Privacy Policy
                    </a>{" "}
                    and Data Protection terms.
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div className=" container">
        <section className=" mb-12">
          <div className="  flex-1 min-w-[200px]">
            <h3 className=" text-5xl mb-8">Find Us</h3>
            <CardGrid />
          </div>
        </section>
      </div>
      <div className=" bg-slate-950 w-full rounded-t-2xl p-10  ">
        <section className="mb-12 ">
          <footer>
            <Footer />
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Contact;
