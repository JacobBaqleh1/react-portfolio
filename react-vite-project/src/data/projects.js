// Single source of truth for portfolio projects.
// Both the Home cards and the project detail pages read from here.
//
// To add your write-up for a project, fill in the `thinking` field below.
// It accepts an array of paragraphs (each string becomes its own paragraph).

const projects = [
  {
    key: 1,
    slug: "mykitchenlist",
    img: "/mykitchenlist.png",
    title: "MyKitchenList",
    description:
      "AI-powered kitchen management app built with React. Features include fridge/freezer/pantry tracking, photo scanning to add groceries, receipt scanning, and AI-powered meal suggestions based on what's on hand.",
    link: "https://mykitchenlist.vercel.app",
    technologies: [
      "React 19",
      "React Router v7",
      "Vite",
      "Node.js",
      "Express",
      "Neon Postgres",
      "Drizzle ORM",
      "Claude (AWS Bedrock)",
    ],
    thinking: [],
  },
  {
    key: 2,
    slug: "roam",
    img: "/roam-shot.png",
    title: "ROAM",
    description:
      "ROAM is a web application that helps users discover and explore national parks across all 50 states. Featuring an interactive map interface, users can search for parks, save their favorites, and write personalized reviews. The platform includes user authentication for a tailored experience. ROAM is built with React on the frontend, Express for the backend, and MongoDB for data storage.",
    link: "https://roam-sigma.vercel.app/",
    gitHub: "https://github.com/JacobBaqleh1/ROAM",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
    thinking: [],
  },
  {
    key: 3,
    slug: "skate-spot-guesser",
    img: "/ssg-shot.png",
    title: "Skate Spot Guesser",
    description:
      "Skate Spot Guesser is an interactive game inspired by GeoGuessr, where players are challenged to identify skate spots from Google Street View images. Test your knowledge of famous skate locations and explore new spots virtually. Built with Next.js and the Google Street View API.",
    link: "https://nextjs-skatespot-guesser.vercel.app/",
    gitHub: "https://github.com/JacobBaqleh1/nextjs-skatespot-guesser",
    technologies: ["Next.js", "Google API", "Tailwind CSS"],
    thinking: [],
  },
  {
    key: 4,
    slug: "pet-friends",
    img: "/remix-pets.png",
    title: "Pet Friends",
    description:
      "Pet Friends is a web application that connects users with adoptable pets through a live adoption API. Built with the Remix framework, it offers a seamless experience for browsing, searching, and learning more about pets looking for a new home.",
    link: "https://remix-pets.vercel.app/",
    gitHub: "https://github.com/JacobBaqleh1/remix-pets",
    technologies: ["Remix.run", "Public API", "Tailwind CSS"],
    thinking: [],
  },
];

// Team / open-source projects (shown on the "Team Projects" tab).
export const teamProjects = [
  {
    key: 101,
    slug: "tenant-first-aid",
    img: "/tenant.png",
    title: "Tenant First Aid",
    description:
      "A legal AI platform that helps tenants understand their rights and navigate eviction processes. I've been building responsive React components, implementing TypeScript interfaces, and creating reusable UI elements for the frontend user experience.",
    link: "https://tenantfirstaid.com/",
    gitHub: "https://github.com/tenantfirstaid/tenantfirstaid",
    technologies: ["React", "TypeScript"],
    thinking: [],
  },
  {
    key: 102,
    slug: "safe-streets",
    img: "/safeStreets.png",
    title: "Safe Streets",
    description:
      "Non-profit organization spreading awareness of traffic violence.",
    link: "https://pdxfamiliesforsafestreets.org/",
    gitHub: "https://github.com/BurlapRobot/pdx-fss",
    technologies: ["JavaScript", "Decap CMS"],
    thinking: [],
  },
];

export function getProjectBySlug(slug) {
  return (
    projects.find((p) => p.slug === slug) ||
    teamProjects.find((p) => p.slug === slug)
  );
}

export default projects;
