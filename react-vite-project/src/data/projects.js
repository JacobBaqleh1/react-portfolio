// Single source of truth for portfolio projects.
// Both the Home cards and the project detail pages read from here.
//
// To add your write-up for a project, fill in the `thinking` field below.
// It accepts an array of paragraphs (each string becomes its own paragraph).

export const clientProjects = [
  {
    key: 5,
    slug: "lara-renee-renaud-animation",
    img: "/lara-renaud-animation.png",
    title: "Lara Renee Renaud Animation",
    badge: "Client Work",
    description:
      "Commissioned client website for animator and visual artist Lara Renee Renaud. A custom Next.js portfolio with dedicated pages for films, paintings, drawings, about, and contact. Animation reels and shorts stream from Cloudflare R2, and the site is hosted on Vercel.",
    link: "https://www.larareneerenaudanimation.com",
    techCategories: [
      { label: "Frontend", items: ["Next.js", "Tailwind CSS"] },
      { label: "Hosting", items: ["Vercel"] },
      { label: "Storage", items: ["Cloudflare R2"] },
    ],
    thinking: [
      "Lara needed a site that felt like her work: whimsical, painterly, and built around motion instead of a generic gallery template. I designed and built the full stack as a Next.js app with Tailwind CSS so every page—Home, Films, Paintings, Drawings, About, and Contact—could follow her visual language rather than a CMS theme.",
      "The films section is the center of the site. Her 2024 reel and shorts (The Household, The Escape, Merry, Un/Write, Paradox) stream from Cloudflare R2 so large video files stay off the app server while remaining fast to play. A custom player sits on top of those R2 assets, and festival laurels sit alongside the work they belong to.",
      "Paintings and drawings are laid out as image-forward galleries so the art stays the focus. The site is deployed on Vercel, with media delivered from R2 so the frontend stays light even as the portfolio grows.",
    ],
  },
];

const projects = [
  {
    key: 1,
    slug: "mykitchenlist",
    img: "/mykitchenlist.png",
    title: "MyKitchenList",
    description:
      "AI-powered kitchen management app built with React. Features include fridge/freezer/pantry tracking, photo scanning to add groceries, receipt scanning, and AI-powered meal suggestions based on what's on hand.",
    link: "https://mykitchenlist.vercel.app",
    gitHub: "https://github.com/JacobBaqleh1/Kitchen-list",
    techCategories: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend", items: ["Node.js", "Websockets"] },
      { label: "Database", items: ["Neon DB"] },
      { label: "AI", items: ["AWS Bedrock"] },
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
    techCategories: [
      { label: "Frontend", items: ["React", "Tailwind CSS"] },
      { label: "Backend", items: ["Node.js", "GraphQL"] },
      { label: "Database", items: ["MongoDB"] },
    ],
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
    techCategories: [
      { label: "Frontend", items: ["Next.js", "Tailwind CSS"] },
      { label: "APIs", items: ["Google API"] },
      { label: "Database", items: ["Firebase DB"] },
    ],
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
    techCategories: [
      { label: "Frontend", items: ["Remix.run", "Tailwind CSS"] },
      { label: "APIs", items: ["Public API"] },
    ],
    thinking: [],
  },
];

// Team / open-source projects (shown below personal projects on the home page).
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
    techCategories: [
      { label: "Frontend", items: ["React", "TypeScript"] },
    ],
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
    techCategories: [
      { label: "Frontend", items: ["JavaScript"] },
      { label: "CMS", items: ["Decap CMS"] },
    ],
    thinking: [],
  },
];

export function getProjectBySlug(slug) {
  return (
    clientProjects.find((p) => p.slug === slug) ||
    projects.find((p) => p.slug === slug) ||
    teamProjects.find((p) => p.slug === slug)
  );
}

export default projects;
