import { Icon } from "@iconify/react";
import React, { useState } from "react";

const projects = [
  {
    title: "Crezco — Brand Identity",
    author: "Multiple owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/12a0c6136416479.61f94fe47a956.png",
  },
  {
    title: "Castil Metal Furniture Brand",
    author: "Multiple owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/de3fa3222343621.67ed58b80a838.jpg",
  },
  {
    title: "Big, Bang and the Boom",
    author: "Mara Drozdova",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/878085211234127.671f8849122c7.png",
  },
  {
    title: "Rosso, Pizza Delivery @ Kuwait",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800/6ce585185894149.657383a9685c6.jpg",
  },
  {
    title: "LITSU airport | FULL CGI",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/7d223d211230065.677c66683fa5e.jpg",
  },
  {
    title: "Koho Metal Card",
    author: "Marcio Flausino",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a361cd218831911.67a7f676b3930.png",
  },
  {
    title: "IGGY Lamp Design | Flying Objects",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800/67dc6a216796529.678910316582a.jpg",
  },
  {
    title: "Urban life project",
    author: "VOLUME VISION",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800/d06106219205505.67adefe5536e7.jpg",
  },
  {
    title: "FUJITSU GENERAL “nocria” TV-CM Character Design 2024",
    author: "Hiroshi Yoshii",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/d76408216302953.677dd902b747c.jpg",
  },
  {
    title: "Selected Client Work 2024",
    author: "Kim Salt",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/50cc26215190411.6765bd11ae7ca.jpg",
  },
  {
    title: "Mahindra BE6E +XEV9E",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/acb8d3216212675.677c7fd3720fa.jpg",
  },
  {
    title: "Asterisk",
    author: "studio dolphins",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/7d6632219095623.67ac5ccfefe5e.jpg",
  },
  {
    title: "Freedcamp",
    author: "Afterglow Studio",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/d0a8e3216349129.677e844459ea9.jpg",
  },
  {
    title: "Hankook Tire Cartoon",
    author: "TECH&KINDNESS 기술과친절",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/bf7b6e222940409.67efb44315c5e.jpg",
  },
  {
    title: "WMerch | Classic Cap",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/649bde219758163.67f336264809a.jpg",
  },
  {
    title: "2024 Graduation Catalogue",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/00a10b222627931.67ea1dda72aa3.jpg",
  },
  {
    title: "TUFF TABLE",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4df4a4223061011.67f283cb48ef8.jpg",
  },
  {
    title: "SIRIUS - AR Goggles",
    author: "ZJ- DDG",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/c8d9b9220506735.67c4831df3496.gif",
  },
  {
    title: "Summer in the French Alps I",
    author: "Grégoire Pansu",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/902b5c223017537.67f1456c3c9fe.jpg",
  },
  {
    title: "Logofolio Vol.2 2025 / 30days 30 logos",
    author: "Victoria Rys",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800/f2a566222222469.67e2628ec5237.jpg",
  },
  {
    title: "WALK&TALK Azores",
    author: "Multiple Owners ⌄",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/source/9e773181736021.5eb0531824f56.jpg",
  },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <section>
        {/* Header Area */}
        <header className="h-[55px] px-[24px] grid grid-cols-2 items-center justify-between border-b border-[#e8e7e7] bg-white sticky top-0 z-50 ">
          {/* Visible in desktop */}
          <div className="flex items-center gap-5 cursor-pointer sm:hidden md:hidden max-sm:hidden lg:flex">
            <div>
              <i className="fa-brands fa-behance text-2xl"></i>
            </div>
            {/* Dropdowns */}
            <div className="font-semibold flex items-center gap-1 h-[55px] border-b-2 border-black hover:border-none relative group ">
              Explore<span className="text-[#737272]">⌄</span>
              <div class="absolute top-14 w-44 shadow-all-sides rounded hidden group-hover:block text-md bg-white pb-4">
                <a href="#" class="block px-4 py-1 text-blue-500 mt-2">
                  Search & Explore
                </a>
                <a href="#" class="block px-4 py-1 hover:text-blue-500">
                  Assets
                </a>
                <a href="#" class="block px-4 py-2 hover:text-blue-500">
                  Curated Galleries
                </a>
                <div className="mt-7 text-sm text-[#848484] text-start px-4">
                  <a href="#" class="block  hover:text-blue-500 py-1">
                    Best of Behance
                  </a>
                  <a href="#" class="block  hover:text-blue-500 py-1">
                    Graphic Design
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    Illustration
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    Photography
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    UX/UI
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    3D Art
                  </a>
                </div>
              </div>
            </div>
            <div className="h-[55px] hover:border-b-2 hover:border-black flex items-center font-semibold ">
              Find Job
            </div>
            <div className="font-semibold flex items-center gap-1 h-[55px] border-b-2 border-black hover:border-none relative group ">
              Hire Freelancers{" "}
              <span className="text-[rgb(115,114,114)]">⌄</span>
              <div class="absolute top-14 w-52 shadow-all-sides rounded hidden group-hover:block text-md text-start px-4 bg-white pb-4">
                <a href="#" class="block py-1 hover:text-blue-500 mt-2">
                  <i className="fa-regular fa-clipboard"></i> Freelance projects
                </a>
                <a href="#" class="block py-1 hover:text-blue-500">
                  <i className="fa-solid fa-magnifying-glass"></i> Find
                  creatives
                </a>
                <a href="#" class="block py-2 hover:text-blue-500">
                  <i className="fa-solid fa-circle-info"></i> Hiring on behance
                </a>
                <a href="#" class="block py-2 hover:text-blue-500">
                  <i className="fa-solid fa-plus"></i> New Freelance project
                </a>
                <div className="mt-4 text-sm text-[#848484] border-t border-[#dedddd]">
                  <a href="#" class="block  hover:text-blue-500 py-1">
                    Logo Designers
                  </a>
                  <a href="#" class="block  hover:text-blue-500 py-1">
                    Brand Designers
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    Website Designers
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    Illustrator
                  </a>
                  <a href="#" class="block hover:text-blue-500 py-1">
                    Social media Designers
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Right icons-- For desktop*/}
          <div className="flex items-center justify-end gap-4 sm:hidden md:hidden max-sm:hidden lg:flex">
            <button className="py-2 px-5 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 transition duration-500 hover:bg-gradient-to-r hover:from-blue-900 hover:via-blue-700 hover:to-blue-500 text-sm rounded-2xl flex flex-row items-center gap-2 text-white font-semibold">
              Upgrade to
              <div className="px-2 bg-white rounded-lg text-xs font-semibold text-blue-500">
                Pro
              </div>
            </button>
            <button className="px-4 py-1 rounded-2xl text-blue-500 font-semibold text-md bg-white transition duration-300 hover:bg-blue-100 hover:border hover:border-blue-200">
              Sign In
            </button>
            <button className="text-3xl ">
              <i className="fa-brands fa-atlassian bg-black text-white"></i>
            </button>
          </div>

          {/*Visible in mobile*/}

          <div className="lg:hidden ">
            <div className="flex items-center gap-4 ">
              <button onClick={() => setOpen(true)}>
                <i className="fa-solid fa-bars text-xl"></i>
              </button>

              {/* Sidebar */}

              <div
                className={`fixed top-0 left-0 h-full w-64 overflow-y-auto bg-white shadow-lg transition-transform duration-300 z-40 ${
                  open ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                {/* Close Button */}

                <div className="flex justify-between items-center px-4">
                  <button
                    onClick={() => setOpen(false)}
                    className="py-4 text-xl text-start font-semibold"
                  >
                    ✕
                  </button>
                  <button className="px-4 py-1 rounded-2xl text-blue-500 font-semibold text-md bg-white transition duration-300 hover:bg-blue-100 hover:border hover:border-blue-200">
                    Sign In
                  </button>
                </div>

                {/* Menu-sidebar */}

                <ul className="p-4 space-y-4 text-start">
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpen(false)}
                      className="text-lg font-semibold"
                    >
                      Discover
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpen(false)}
                      className="text-lg font-semibold"
                    >
                      Assests
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpen(false)}
                      className="text-lg font-semibold"
                    >
                      Find Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => setOpen(false)}
                      className="text-lg font-semibold"
                    >
                      Hire Freelancers
                    </a>
                  </li>
                </ul>
                <div className="grid grid-cols-[30%_60%] mx-8 items-center bg-black rounded-xl translate-x-[-20px] cursor-pointer py-1">
                  <i className="fa-brands fa-apple text-5xl text-white"></i>
                  <h4 className="text-white text-xs">
                    Download on the <br></br>
                    <span className="text-lg font-semibold">App Store</span>
                  </h4>
                </div>
                <div className="grid grid-cols-[30%_60%] mx-8 items-center bg-black rounded-xl translate-x-[-20px] mt-4 py-1 cursor-pointer">
                  <i className="fa-brands fa-google-play text-4xl text-white"></i>
                  <h4 className="text-white text-xs">
                    Get it on <br></br>
                    <span className="text-lg font-semibold">Google Play</span>
                  </h4>
                </div>
                <ul className="text-sm font-semibold text-start py-6 px-4 cursor-pointer">
                  <li className="py-1">English</li>
                  <li className="py-1">About</li>
                  <li className="py-1">Blog</li>
                  <li className="py-1">TOU</li>
                  <li className="py-1">privacy</li>
                  <li className="py-1">Community</li>
                  <li className="py-1">Help</li>
                  <li className="py-1">
                    Do not sell or share my personal information
                  </li>
                </ul>
                <button className="py-2 px-4 mx-5 mb-5 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 transition duration-500 hover:bg-gradient-to-r hover:from-blue-900 hover:via-blue-700 hover:to-blue-500 text-sm rounded-2xl flex flex-row items-center gap-2 text-white font-semibold">
                  Upgrade to
                  <div className="px-2 bg-white rounded-lg text-xs font-semibold text-blue-500">
                    Pro
                  </div>
                </button>
              </div>
              <i className="fa-brands fa-behance text-2xl"></i>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center gap-4 lg:hidden">
            <div>
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </div>
            <button className="py-1 bg-blue-600 text-white font-semibold rounded-2xl px-4 max-sm:px-2 text-lg">
              Use App
            </button>
          </div>
        </header>

        {/*Nav area*/}
        <nav className="lg:h-[88px] max-sm:h-[120px] sm:h-[120px] md:h-[120px] px-[24px] py-[20px] flex flex-row gap-2 border-b border-[#e8e7e7] bg-white">
          {/*Desktop area*/}
          <div className="flex flex-row items-center gap-1 cursor-pointer rounded-3xl border border-[#d6d6d6] px-4 py-2 lg:flex md:hidden sm:hidden max-sm:hidden">
            <i className="fa-solid fa-arrow-up-wide-short text-lg"></i>
            <span className="font-semibold">Filter</span>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-[#d6d6d6] px-4 py-2 w-full lg:flex md:hidden sm:hidden max-sm:hidden">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search the creative world at work...."
              className="outline-none text-lg w-full"
            />
          </div>

          <div className="flex flex-row items-center gap-2 px-4 w-56 rounded-3xl border border-[#d6d6d6] py-2 cursor-pointer hover:bg-[#f8f7f7] lg:flex md:hidden sm:hidden max-sm:hidden">
            <i className="fa-solid fa-image text-[gray] text-lg"></i>
            <span className="text-sm text-start flex-shrink-0">
              Search by image
            </span>
          </div>
          <button className="px-4 py-2 rounded-3xl border relative border-[#d6d6d6] hover:border-[#434343] font-semibold lg:flex md:hidden sm:hidden max-sm:hidden">
            <span className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-[10px] font-bold border-none text-xs bg-white text-[#878686]">
              sort
            </span>
            Recommended
          </button>

          {/*Mobile area*/}
          <div className="lg:hidden px-3 mx-auto">
            <div className="flex items-center gap-2 rounded-3xl border border-[#d6d6d6] px-4 py-2 ">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search the creative world at work...."
                className="outline-none text-sm  "
              />
            </div>
            <div className="flex items-center justify-center text-lg gap-2 w-full cursor-pointer rounded-3xl border border-[#c0c0c0] py-2 px-4 mt-3 ">
              <i className="fa-solid fa-arrow-up-wide-short text-lg"></i>
              <span className="font-semibold">Filter</span>
            </div>
          </div>
        </nav>

        {/*Image-Section area*/}

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item, i) => (
              <div
                key={i}
                className="group relative cursor-pointer shadow-lg shadow-blue-500/50 rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end">
                  {/* Save Button */}
                  <button className="flex items-center gap-2 absolute top-4 left-4 bg-black/70 text-white text-sm font-semibold px-3 py-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition">
                    <i className="fa-solid fa-floppy-disk"></i>
                    Save
                  </button>
                  <div className="text-white p-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm">{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*Sign In section*/}

        <section className="bg-white/40 shadow-[0_-30px_60px_rgba(255,255,255,0.7)]  transform -translate-y-8 flex items-center justify-center ">
          <div className="pt-28 mb-7 ">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Sign in to search the world's
              <br /> largest creative network
            </h1>

            <button className="mx-auto font-bold text-[#444444] text-sm py-2 px-12 rounded-3xl flex flex-row items-center gap-3 hover:border-2 hover:border-[#adacac]">
              <Icon icon="logos:google-icon" />
              Continue with Google
            </button>
            <button className="mx-auto mt-2 font-bold text-[#444444] text-sm py-2 px-10 rounded-3xl flex flex-row items-center gap-3 hover:border-2 hover:border-[#adacac]">
              <Icon icon="logos:facebook" />
              Continue with Facebook
            </button>
            <button className="mx-auto mt-2 font-bold text-[#444444] text-sm py-2 px-10 rounded-3xl flex flex-row items-center gap-3 hover:border-2 hover:border-[#adacac]">
              <Icon icon="logos:apple" />
              Continue with Apple
            </button>

            <div className="text-center mt-2">
              <a className=" text-sm text-blue-700 hover:underline font-semibold cursor-pointer">
                View More
              </a>
            </div>

            <div className="text-center text-[#c2c2c2] mt-2 ">
              ______________________
              <span className="text-black font-semibold">or</span>
              ______________________
            </div>

            <h4 className="font-bold text-xl mt-3">Continue with email</h4>
            <h5 className="text-[#696969] text-sm font-semibold mt-2">
              Email address
            </h5>
            <div className=" border-2 border-black rounded-md mt-2">
              <input type="text" className="w-full py-2 px-2 text-md" />
            </div>
            <div className="text-end  px-2 mt-4">
              <button className="bg-black text-white py-[6px] px-4 font-semibold text-sm rounded-3xl">
                Continue
              </button>
            </div>
          </div>
        </section>

        {/*Footer*/}

        <footer>
          <div>
            <img
              src="https://a5.behance.net/e18c7db9240f272440343d638d32457f2f650f9d/img/footer/creator-pro-upsell-banner-border.webp"
              className="h-1"
            />
            <div className="text-center py-3 px-1">
              <h4 className="">
                <span className="font-bold">
                  Upgrade to Behance Pro today:{" "}
                </span>
                Get advanced analytics, a custom portfolio website, and more
                features to grow your creative career.
                <span className="text-blue-700 font-semibold cursor-pointer text-lg">
                  {" "}
                  Start your 7 day free trial
                </span>
              </h4>
            </div>
          </div>

          <div className="bg-[#191919] pt-20 px-[50px]">
            <div className="text-white">
              <i className="fa-brands fa-behance text-5xl"></i>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3 text-white">
              <div>
                <h4 className="font-bold mb-4 text-lg">Built For Creatives</h4>
                <ul className="cursor-pointer">
                  <li className="py-1 hover:underline">Try Behance Pro</li>
                  <li className="py-1 hover:underline">Find Inspiration</li>
                  <li className="py-1 hover:underline">Get Hired</li>
                  <li className="py-1 hover:underline">Sell Creative Assets</li>
                  <li className="py-1 hover:underline">
                    Sell Freelance Services
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg">Find Talent</h4>
                <ul className="cursor-pointer">
                  <li className="py-1 hover:underline">Post a Job</li>
                  <li className="py-1 hover:underline">Graphic Designers</li>
                  <li className="py-1 hover:underline">Photographers</li>
                  <li className="py-1 hover:underline">Video Editors</li>
                  <li className="py-1 hover:underline">Web Designers</li>
                  <li className="py-1 hover:underline">Illustrator</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg">Behance</h4>
                <ul className="cursor-pointer">
                  <li className="py-1 hover:underline">About Behance</li>
                  <li className="py-1 hover:underline">Adobe Portfolio</li>
                  <li className="py-1 hover:underline">Download the App</li>
                  <li className="py-1 hover:underline">Blog</li>
                  <li className="py-1 hover:underline">Careers</li>
                  <li className="py-1 hover:underline">Help Center</li>
                  <li className="py-1 hover:underline">Contact Us</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4 text-lg">Social</h4>
                <ul className="cursor-pointer">
                  <li className="py-1 hover:underline">
                    <i className="fa-brands fa-instagram mr-2"></i>
                    Instagram
                  </li>
                  <li className="py-1 hover:underline">
                    <i className="fa-brands fa-twitter mr-2"></i>
                    Twitter
                  </li>
                  <li className="py-1 hover:underline">
                    <i className="fa-brands fa-pinterest mr-2"></i>
                    Pinterest
                  </li>
                  <li className="py-1 hover:underline">
                    <i className="fa-brands fa-facebook mr-2"></i>
                    Facebook
                  </li>
                  <li className="py-1 hover:underline">
                    <i className="fa-brands fa-linkedin mr-2"></i>
                    LinkedIn
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t-[1.5px] border-[gray] mt-14 pt-10 pb-10 font-semibold">
              <div className="grid 2xl:grid-cols-[35%_65%] grid-cols-1 gap-y-4">
                <div className="text-white flex flex-row flex-wrap gap-y-2 items-center lg:gap-7">
                  <div className="cursor-pointer">
                    <i className="fa-brands fa-atlassian text-white text-xl"></i>
                    <span className="text-white font-bold"> Adobe</span>
                  </div>
                  <div className="text-sm">
                    <span> © </span>
                    2025 Adobe Inc. All rights reserved.
                  </div>
                </div>

                <div className="text-white px-2" >
                  <ul className="flex items-center justify-center flex-row flex-wrap gap-5 text-sm cursor-pointer">
                    <li className="hover:underline">English</li>
                    <li className="hover:underline">TOU</li>
                    <li className="hover:underline">Privacy</li>
                    <li className="hover:underline">Community</li>
                    <li className="hover:underline">Cookie preferences</li>
                    <li className="hover:underline">Do not sell or share my personal information</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
