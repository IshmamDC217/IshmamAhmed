"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-[#050711] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Global ambient background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(10,24,18,0.9),transparent_60%),radial-gradient(circle_at_78%_18%,rgba(82,121,111,0.18),transparent_50%),radial-gradient(circle_at_55%_80%,rgba(52,78,65,0.22),transparent_60%)]" />
        <div className="hidden lg:block">
          <div className="absolute top-1/3 left-[10%] h-80 w-80 bg-gradient-to-r from-[#84a98c]/30 to-[#a3b18a]/20 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-1/4 right-[10%] h-96 w-96 bg-gradient-to-r from-[#52796f]/25 to-[#6b8f71]/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-0 left-1/2 h-64 w-64 bg-gradient-to-r from-[#a3b18a]/15 to-[#cad2c5]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 right-1/4 h-48 w-48 bg-gradient-to-r from-[#52796f]/20 to-[#84a98c]/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        <div className="lg:hidden">
          <div className="absolute top-1/4 left-[5%] h-64 w-64 bg-gradient-to-r from-[#84a98c]/40 to-[#a3b18a]/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/3 right-[5%] h-72 w-72 bg-gradient-to-r from-[#52796f]/35 to-[#6b8f71]/25 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="absolute inset-0">
          {[
            { left: "6%", top: "12%" }, { left: "18%", top: "28%" },
            { left: "32%", top: "18%" }, { left: "44%", top: "36%" },
            { left: "58%", top: "22%" }, { left: "72%", top: "30%" },
            { left: "84%", top: "16%" }, { left: "12%", top: "58%" },
            { left: "26%", top: "72%" }, { left: "40%", top: "62%" },
            { left: "54%", top: "70%" }, { left: "68%", top: "58%" },
            { left: "82%", top: "74%" }, { left: "8%", top: "88%" },
            { left: "36%", top: "90%" }, { left: "64%", top: "88%" },
            { left: "92%", top: "56%" }, { left: "78%", top: "44%" },
          ].map((spot, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#84a98c]/50 rounded-full"
              style={{ left: spot.left, top: spot.top }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <Grid /> {/* Grid is now fourth */}
        <Experience />
        <Approach />
        <Clients /> {/* Music section here */}
        <Footer />
      </div>
    </main>
  );
};


export default Home;
