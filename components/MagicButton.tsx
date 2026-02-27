import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="group relative inline-flex h-14 w-full md:w-64 md:mt-10 overflow-hidden rounded-2xl p-[2px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#84a98c_20%,#a3b18a_40%,#84a98c_60%,#ffffff_80%,#84a98c_100%)]" />
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#a3b18a_25%,#84a98c_50%,#a3b18a_75%,#ffffff_100%)] opacity-60" />

      <span
        className={`relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl
             bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] px-8 text-sm font-bold text-white backdrop-blur-3xl gap-3
             border border-white/20 group-hover:border-[#84a98c]/50
             group-hover:shadow-[0_0_40px_rgba(132,169,140,0.4)]
             transition-all duration-300 ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
