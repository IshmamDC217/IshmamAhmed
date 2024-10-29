import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Music", link: "#music" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Crafting immersive software experiences",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Wordly",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack Mastery",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/b3.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "Prog Snob",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.png",
  },
  {
    id: 5,
    title: "Composing & Recording Sick Riffs",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.png",
    spareImg: "/b5.png",
  },
  {
    id: 6,
    title: "Let's collaborate on a project or jam",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "PocketOwl",
    des: "A group expense tracker using Convex, React, and TypeScript for flexible expense splitting, budget management, and personal finance tracking.",
    img: "/pocketowl.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/convex.png", "/scn.png"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Best Car For You",
    des: "A car-buying assistant built with Angular, AWS, and TypeScript, providing personalized car recommendations based on user preferences.",
    img: "/bcfy.png",
    iconLists: ["/re.svg", "/aws.png", "/tail.svg", "/ts.svg", "/csharp.png"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "MetoraWeb",
    des: "A video game-inspired website for Metora Cliffs, a prog metal band, featuring dynamic animations using Next.js, Tailwind CSS, and Framer Motion.",
    img: "/metoraweb.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "CrypticChat",
    des: "An end-to-end encrypted chat platform built with React and GraphQL, integrating blockchain for key storage to enhance security.",
    img: "/crypticchat.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Fusing elements of Progressive Rock with catchy video game inspired synth melodies, Metora Cliffs strike a unique balance between appealing to Prog fans, while still remaining fun and accessible to casual Rock and Metal listeners. While exploring the band's music, you'll find melodic and intricate synth and guitar leads, blazing solos, passionate vocal hooks and even the occasional bit of ukulele shredding!",
    name: "Metora Cliffs",
    title: "Guitarist",
  },
  {
    quote:
      "Samin Ahmed's music is a testament to the power of versatility and creativity. His compositions are a blend of intricate guitar work and soulful melodies that captivate audiences. Working with him has been an inspiring journey, showcasing his dedication to his craft and his ability to bring out the best in every performance.",
    name: "Samin Ahmed",
    title: "Guitarist",
  },
  {
    quote:
      "Hades brings a powerful and intense energy to the stage, with a sound that is both dark and captivating. The band's music is characterized by heavy guitar riffs, thunderous drums, and haunting vocals. Being a part of this band has been an exhilarating experience, pushing the boundaries of what we can achieve together.",
    name: "Hades",
    title: "Guitarist",
  },
  {
    quote:
      "Galactic Jukebox is a fusion of cosmic sounds and earthly rhythms, creating a unique auditory experience that transports listeners to another dimension. The band's innovative approach to music, combined with their technical prowess, makes every performance a memorable one. It's been an honor to contribute to such a groundbreaking project.",
    name: "Galactic Jukebox",
    title: "Guitarist",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    desc: "Resolved complex full-stack issues and enhanced HLR Lookup products using TypeScript, React.js, Node.js, and PHP. Integrated Redis to boost performance and scalability across applications and developed reusable, modular UI/UX components for client and admin pages.",
    className: "md:col-span-2",
    thumbnail: "/exp1.gif",
  },
  {
    id: 2,
    title: "Mobile Developer",
    desc: "Designed and built mobile applications for iOS and Android, focusing on responsive layouts, intuitive navigation, and optimized performance.",
    className: "md:col-span-2",
    thumbnail: "/exp2.gif",
  },
  {
    id: 3,
    title: "Session Guitarist",
    desc: "Recorded guitar tracks for various independent artists, adding complex riffs and solos that enhanced the overall composition and production quality.",
    className: "md:col-span-2",
    thumbnail: "/exp3.gif",
  },
  {
    id: 4,
    title: "Lead Guitarist - Progressive Rock Band",
    desc: "Composed and performed intricate guitar arrangements, blending elements of rock, jazz, and experimental genres to captivate live audiences.",
    className: "md:col-span-2",
    thumbnail: "/exp4.gif",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/instagram.png",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
