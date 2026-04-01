import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flex1 from "../assets/flex1.svg";
import flex2 from "../assets/flex2.svg";
import flex3 from "../assets/flex3.svg";
import flex4 from "../assets/flex4.svg";
import eclipse1 from "../assets/Ellipse1.svg";
import joseph from "../assets/Joseph.svg";
import wasiu from "../assets/wasiu.svg";
import stayloop from "../assets/Stayloop.svg";
import footLogo from "../assets/Footerimg.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import tiktok from "../assets/tiktok.svg";
import LandingNavBar from "../Components/LandingNavBar";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash === "#testimonials") {
      const element = document.getElementById("testimonials");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white font-sans text-black overflow-x-hidden">
      <LandingNavBar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="font-black font-rackety text-4xl sm:text-7xl md:text-8xl lg:text-7xl leading-[1.1] mb-8">
            Organize What <br className="hidden lg:block" /> Matters, Move At{" "}
            <br className="hidden lg:block" /> Your Own Pace
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="px-10 h-14 bg-[#77C2FF] rounded-full border-2 border-black border-b-4 font-bold text-lg active:translate-y-1 transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/signin")}
              className="px-10 h-14 bg-white rounded-full border-2 border-black border-b-4 font-bold text-lg active:translate-y-1 transition-all"
            >
              Login
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            className="w-full max-w-125 h-auto"
            src={flex1}
            alt="Hero Illustration"
          />
        </div>
      </section>

      {/* Features Header */}
      <div className="text-center py-12">
        <h2 className="font-black font-rackety text-3xl md:text-5xl leading-tight">
          A Simple Way To <br /> Manage Your Tasks
        </h2>
      </div>

      {/* Feature Cards - Capsule Style */}
      <section className="max-w-6xl mx-auto px-6 space-y-12 pb-20">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row border-2 border-black border-b-8 rounded-[40px] md:rounded-full overflow-hidden bg-white">
          <div className="w-full md:w-1/2 bg-[#F6FBFF] flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <img className="w-48 md:w-64 object-contain" src={flex2} alt="" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-black mb-4 font-rackety">
              Create Your Tasks
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed ">
              Add What Matters, When It Matters Big Goals Or Small Wins, All In
              One Place.
            </p>
          </div>
        </div>

        {/* Card 2 - Reverse */}
        <div className="flex flex-col md:flex-row-reverse border-2 border-black border-b-8 rounded-[40px] md:rounded-full overflow-hidden bg-white">
          <div className="w-full md:w-1/2 bg-[#F6FBFF] flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-l-2 border-black">
            <img className="w-48 md:w-64 object-contain" src={flex3} alt="" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-black mb-4 font-rackety">
              Update As You Go
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Edit, Prioritize, And Track Progress Easily As Your Day Evolves.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row border-2 border-black border-b-8 rounded-[40px] md:rounded-full overflow-hidden bg-white">
          <div className="w-full md:w-1/2 bg-[#F6FBFF] flex items-center justify-center p-12 border-b-2 md:border-b-0 md:border-r-2 border-black">
            <img className="w-48 md:w-64 object-contain" src={flex4} alt="" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-black mb-4 font-rackety">
              Get Things Done, Better
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Stay Focused, Feel Accomplished, And Enjoy The Momentum Of
              Checking Things Off.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20 px-6">
        <h2 className="text-center font-black text-4xl md:text-6xl mb-16 font-rackety">
          Loved By People Who <br /> Get Things Done
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 - Circular Profile */}
          <div className="aspect-square border-2 border-black border-b-8 rounded-full bg-[#F6FBFF] flex flex-col items-center justify-center p-8 text-center">
            <img
              src={eclipse1}
              className="w-16 h-16 rounded-full mb-4 border border-black"
              alt=""
            />
            <h4 className="font-black text-4xl font-rackety">OlaChi Maryam</h4>
            <p className="text-sm md:text-base px-4">
              This App Completely Changed How I Plan My Day. Creating Tasks Is
              Simple, Updating Them Feels Effortless, And I Actually Finish What
              I Start Now.
            </p>
          </div>

          {/* Item 2 - Stats */}
          <div className="aspect-square border-2 border-black border-b-8 rounded-[170px] bg-white flex flex-col items-center justify-center p-8 text-center">
            <span className="text-8xl font-black italic font-rackety">32%</span>
            <p className="mt-2">Increase In Task Completion Rate</p>
          </div>

          {/* Item 3 - Circular Profile */}
          <div className="aspect-square border-2 border-black border-b-8 rounded-[170px] bg-[#F6FBFF] flex flex-col items-center justify-center p-8 text-center">
            <img
              src={joseph}
              className="w-16 h-16 rounded-full mb-4 border border-black"
              alt=""
            />
            <h4 className="font-black text-4xl font-rackety">Joseph Ibrahim</h4>
            <p className="text-sm md:text-base px-4">
              I Love How Organized Everything Feels Without Being Overwhelming.
              It Fits Perfectly Into My Daily Routine And Keeps Me Focused.
            </p>
          </div>

          {/* Row 2 - Items */}
          <div className="aspect-square border-2 border-black border-b-8 rounded-[170px] bg-white flex flex-col items-center justify-center p-8 text-center">
            <span className="text-8xl font-black italic font-rackety">3X</span>
            <p className="mt-2">Better Daily Focus And Consistency</p>
          </div>

          <div className="aspect-square border-2 border-black border-b-8 rounded-[170px] bg-[#F6FBFF] flex flex-col items-center justify-center p-8 text-center">
            <img
              src={wasiu}
              className="w-16 h-16 rounded-full mb-4 border border-black"
              alt=""
            />
            <h4 className="font-black text-4xl font-rackety">Wasiu David</h4>
            <p className="text-sm md:text-base px-4">
              Managing My Tasks Used To Be Stressful, But This Makes It Feel
              Calm And Intentional. I Get More Done With Less Pressure.
            </p>
          </div>

          <div className="aspect-square border-2 border-black border-b-8 rounded-[170px] bg-white flex flex-col items-center justify-center p-8 text-center">
            <span className="text-8xl font-black italic font-rackety">
              2.5 Hours
            </span>
            <p className=" mt-2">Saved Per Week On Planning</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row border-2 border-black border-b-8 rounded-[170px] md:rounded-full overflow-hidden">
          <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center">
            <h3 className="text-5xl font-black mb-4 font-rackety">
              Stay In The Loop
            </h3>
            <p className="mb-8 text-gray-700">
              Get Simple, Practical Insights On Productivity, Design, And
              Building Better Digital Experiences Delivered Straight To Your
              Inbox.
            </p>
            <div className="flex border-2 border-black rounded-[170px] overflow-hidden border-b-4">
              <input
                type="email"
                placeholder="Enter your mail here"
                className="flex-1 px-6 py-3 outline-none"
              />
              <button className="bg-[#77C2FF] px-6 py-3 font-bold border-l-2 border-black hover:bg-[#5bb3f0]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#F6FBFF] flex items-center justify-center p-12 border-t-2 md:border-t-0 md:border-l-2 border-black">
            <img className="w-48 md:w-64" src={stayloop} alt="" />
          </div>
        </div>
      </section>

      {/* Footer - match provided design */}
      <footer className="w-full mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
          {/* Top row: centered nav and right social icons */}
          <div className="flex items-center justify-between ">
            {/* Left spacer so nav appears centered relative to socials */}
            <div className="w-32 md:w-40" />

            <nav className="flex gap-10 font-bold text-sm md:text-base">
              <a href="#" className="hover:text-[#77C2FF]">
                Home
              </a>
              <a href="#" className="hover:text-[#77C2FF]">
                Benefits
              </a>
              <a href="#" className="hover:text-[#77C2FF]">
                Testimonial
              </a>
            </nav>

            <div className="flex gap-4">
              <img
                src={facebook}
                alt="Facebook"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={tiktok}
                alt="TikTok"
                className="w-5 h-5 cursor-pointer"
              />
            </div>
          </div>

          {/* Bottom row: large blue icon block and huge wordmark */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="w-60 h-60 md:w-72 md:h-72 bg-[#77C2FF] rounded-[56px] border-2 border-black flex items-center justify-center">
              <img
                src={footLogo}
                alt="Fony app icon"
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
            </div>

            <p className="rubik-beastly-regular text-[9rem] sm:text-[11rem] md:text-[26rem] lg:text-[30rem] leading-none text-black select-none">
              Fony
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
