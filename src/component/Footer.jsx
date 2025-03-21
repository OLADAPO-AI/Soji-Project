import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 py-12 mx-auto bg-slate-950 max-w-7xl">
      <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <Link to="/" className="text-2xl font-bold text-white">
            Joro Services
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Bring together your discussions, memberships, and content. Integrate
            a thriving community wherever your audience is, all under your own
            brand.
          </p>
          <label className="mt-4 block">
            <span className="sr-only">Select a language</span>
            <select className="w-full p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
              <option>English</option>
              <option>Tamil</option>
            </select>
          </label>
        </div>

        {/* Product Links */}
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-4 text-sm font-semibold text-gray-400 uppercase">
            Product
          </p>
          <div className="space-y-2">
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Features
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Integrations
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Documentation
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              FAQs
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Pricing
            </Link>
          </div>
        </nav>

        {/* About Links */}
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-4 text-sm font-semibold text-gray-400 uppercase">
            About
          </p>
          <div className="space-y-2">
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Press-Kit
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Company
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Blog
            </Link>
          </div>
        </nav>

        {/* Contact Links */}
        <nav className="col-span-1 md:col-span-1 lg:col-span-2">
          <p className="mb-4 text-sm font-semibold text-gray-400 uppercase">
            Contact
          </p>
          <div className="space-y-2">
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Twitter
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Instagram
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Email
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Advertising
            </Link>
            <Link
              to="#"
              className="block text-sm text-gray-300 hover:text-accent"
            >
              Chat
            </Link>
          </div>
        </nav>

        {/* Newsletter Subscription */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <p className="mb-4 text-sm font-semibold text-gray-400 uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <form action="#" className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="w-full p-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-2 text-sm text-gray-400">
            Get lessons and insights on how to grow your freelance business.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-800 md:flex-row">
        <p className="mb-4 text-sm text-gray-400 md:mb-0">
          © Copyright 2025 Joro Services. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <Link to="#" className="text-sm text-gray-400 hover:text-accent">
            Terms
          </Link>
          <Link to="#" className="text-sm text-gray-400 hover:text-accent">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
