import React from "react";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import footer_image from "../assets/footer_image.png";
import ScrollUpButton from "./ScrollUPButton";
import morning_care from "../assets/morning_care.jpg";

const Footer = () => {
  const socialMedia = [
    {
      id: "social-media-1",
      icon: instagram,
      link: "https://www.instagram.com/",
    },
    {
      id: "social-media-2",
      icon: facebook,
      link: "https://www.facebook.com/",
    },
    {
      id: "social-media-3",
      icon: twitter,
      link: "https://www.twitter.com/",
    },
    {
      id: "social-media-4",
      icon: linkedin,
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <div className="mt-15 relative">
      <img src={morning_care} alt="morning_care" className="w-full h-3/4" />
      <footer
        className="p-6 mt-20 relative"
        style={{
          backgroundImage: `url(${footer_image})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <ScrollUpButton />
        <div className="grid md:grid-cols-3 gap-8 px-12">
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-blue-500 text-xl mb-2">
                Corporate Information
              </h3>
              <button className="text-gray-500 block mb-2">
                Hotel & Resorts
              </button>
              <button className="text-gray-500 block">Partners</button>
            </div>

            <div className="mb-4">
              <h3 className="text-blue-500 text-xl mb-2">Blogs</h3>
              <button className="text-gray-500 block mb-2">
                Miracle Mirage ublogs
              </button>
            </div>

            <div className="mb-4">
              <h3 className="text-blue-500 text-xl mb-2">Careers</h3>
              <button className="text-gray-500 block">Careers</button>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-blue-500 text-xl">News and Awards</h3>
              <button className="text-gray-500 mb-2  block">News</button>
              <button className="text-gray-500 mb-2  block">Awards</button>
            </div>
            <div className="mb-4">
              <h3 className="text-blue-500 text-xl">Corporate Governance</h3>
              <button className="text-gray-500">CSR</button>
            </div>
          </div>
          <div className="mb-8">
            <div className="mb-4">
              <h3 className="text-blue-500 text-xl">
                Data Privacy & Security Policy
              </h3>
              <button className="text-gray-500 mb-2 block">
                Terms & Conditions
              </button>
              <button className="text-gray-500 mb-2 block">
                privacy statement
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-blue-500 text-xl">Get in touch</h3>
              <button className="text-gray-500 mb-2  block">
                info@Miraclemirage.com
              </button>
              <button className="text-gray-500 mb-2  block">
                Hotel Contact Information
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-blue-500 text-xl mb-5">Follow Us</h3>
              <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                  <img
                    key={social.id}
                    src={social.icon}
                    alt={social.id}
                    className={`w-[25px] h-[25px] object-contain cursor-pointer ${
                      index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                    }`}
                    onClick={() => window.open(social.link)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-12">
          <h3 className="text-blue-500 text-xl mb-5">Get in Your Inbox</h3>
          <form className="mt-4">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="E-mail address"
              className="p-2 text-sm border rounded-md w-full md:w-1/4"
            />
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white p-2 rounded-md ml-5"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="mt-5 px-12">
          <label className="flex">
            <input type="checkbox" className="w-4 h-4 rounded-full" />
            <span className="ml-3 mb-10 text-gray-500">
              By checking this box, I consent to the processing of my <br />
              personal data by Miracle Mirage for the purpose and within the
              <br /> conditions set out in this form and the Miracle Mirage Data
              <button className="ml-2 text-black">Protection Policy*</button>
            </span>
          </label>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
