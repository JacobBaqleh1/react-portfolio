import PortfolioUI from "../components/UI/PortfolioUI";

export default function Home() {
  return (
    <section className=" bg-[#324154] ">

      <div className="flex  ">
        <PortfolioUI
          projects={[
            {
              key: 1,
              img: "/roam-shot.png",
              title: "ROAM ",
              description:
                " ROAM is a web application that helps users discover and explore national parks across all 50 states. Featuring an interactive map interface, users can search for parks, save their favorites, and write personalized reviews. The platform includes user authentication for a tailored experience. ROAM is built with React on the frontend, Express for the backend, and MongoDB for data storage.",

              link: "https://roam-sigma.vercel.app/",
              gitHub: "https://github.com/JacobBaqleh1/ROAM",
              technologies: [
                "React",
                "Node.js",
                "MongoDB",
                "GraphQL",
                "Tailwind CSS",
              ],
            },
            {
              key: 2,
              img: "/ssg-shot.png",
              title: "Skate Spot Guesser",
              description: "Skate Spot Guesser is an interactive game inspired by GeoGuessr, where players are challenged to identify skate spots from Google Street View images. Test your knowledge of famous skate locations and explore new spots virtually. Built with Next.js and the Google Street View API.",
              link: "https://nextjs-skatespot-guesser.vercel.app/",
              gitHub: "https://github.com/JacobBaqleh1/nextjs-skatespot-guesser",
              technologies: [
                "Next.js",
                "Google API",
                "Tailwind CSS"
              ],
            },
            {
              key: 3,
              img: "/remix-pets.png",
              title: "Pet Friends",
              description: "Pet Friends is a fullstack web application that connects users with adoptable pets through a live adoption API. Built with the Remix framework, it offers a seamless experience for browsing, searching, and learning more about pets looking for a new home.",
              link: "https://remix-pets.vercel.app/",
              gitHub: "https://github.com/JacobBaqleh1/remix-pets",
              technologies: [
                "Remix.run",
                "Public API",
                "Tailwind CSS"
              ],
            },
          ]}
        />
      </div>




    </section>
  );
}
