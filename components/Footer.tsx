import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10 overflow-hidden border-t border-white/10" id="contact">
      {/* Radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(132,169,140,0.08),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(82,121,111,0.08),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(163,177,138,0.06),transparent_36%)]"
        aria-hidden
      />

      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-30"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <div className="text-center lg:max-w-[45vw]">
          <span className="gradient-text-accent">Contact</span>
          <h1 className="heading">Elevate Your Presence</h1>
        </div>
        <p className="text-white/40 md:mt-10 my-5 text-center text-xs uppercase tracking-[0.25em]">
          Contact me to achieve your digital goals.
        </p>
        <a href="mailto:ishmam.ahmed24@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="relative flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/30">
          &copy; 2026 Ishmam Ahmed
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-xl bg-white/5 rounded-lg border border-white/10 hover:border-[#84a98c]/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(132,169,140,0.3)] transition-all duration-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
