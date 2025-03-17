import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LogoSlider = () => {
  const logos = [
    "/logo1/jpeg",
    "/logo2.jpeg",
    "/logo3.jpeg",
    "/logo4.jpeg",
    "/logo5.jpeg",
    "/logo6.jpeg",
    "/logo7.jpeg",
    "/logo8.jpeg",
    "/logo9.jpeg",
    "/logo10.jpeg",
    "/logo11.jpeg",
    "/logo12.jpeg",
    "/logo13.jpeg",
    "/logo14.jpeg",
    "/logo15.jpeg",
  ];

  const settings = {
    infinite: true, // Loop infinitely
    speed: 5000, // Transition speed
    slidesToShow: 6, // Number of logos visible at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enables auto-sliding
    autoplaySpeed: 2000, // Time per slide (in ms)
    cssEase: "linear",
    pauseOnHover: false, // Keeps sliding even on hover
  };

  return (
    <div className="w-full absolute bottom-0 bg-gray-900 py-6">
      <Slider {...settings} className="w-[90%] mx-auto">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt={`Logo ${index}`} className="h-20" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
