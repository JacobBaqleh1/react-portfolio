import PortfolioUI from "../components/UI/PortfolioUI";
// import { ChevronRight } from "lucide-react";
import Contact from "./Contact";
// import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full ">
      <section className="relative grid w-full h-[50rem] pt-32  mx-auto overflow-hidden bg-white dark:bg-[#0f172a]">
        {/* Animated Floating Circles */}


        {/* Content */}
        <div className="flex flex-col gap-4 items-center cursor-default z-10">
          <h1 className="flex flex-col items-center">
            <span className="text-6xl dark:text-white">Hi, I&apos;m Jacob |</span>
            <span className="text-7xl text-center block dark:text-white">Software Engineer</span>
          </h1>
          <img
            className="md:hidden w-36 h-40 rounded-[50%] mx-auto"
            src="/profilePic.jpg"
            alt="profile"
          />
          <div className="flex flex-row justify-center bg-white dark:bg-[#91b9f9] rounded-full">
            <a href="https://github.com/JacobBaqleh1" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub Icon" className="w-8 h-8 m-4" />
            </a>
            <a href="https://www.linkedin.com/in/jacob-baqleh" target="_blank" rel="noopener noreferrer">
              <img src="/linkedIn.svg" alt="Linked in" className="w-8 h-8 m-4" />
            </a>
            <a href="https://x.com/JacobBaqleh" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="X" className="w-8 h-8 m-4" />
            </a>
          </div>
          <p className="text-center mx-10 leading-loose text-xl w-1/2 dark:text-white">
            Love turning ideas into real-world web applications. When I’m not coding I’m outside in nature🌲 or skateboarding🛹
          </p>
        </div>
      </section>



      {/* <section className="relative w-full h-[30rem] overflow-hidden bg-gradient-to-b from-black via-purple-900 to-black">
  {/* <!-- Stars --> */}
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div> */}

      {/* <!-- Glow effects for planets or stars --> */}
      {/* <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-indigo-400 rounded-full blur-2xl opacity-25 animate-pulse"></div> */}

      {/* <!-- Content --> */}
      {/* <div className="relative z-10 h-full text-center px-4 max-w-[60rem] m-auto">
    <div className="flex ">
   <h2 className="ml-16 text-4xl font-bold mt-8 bg-white dark:bg-transparent ">
     My Skills 
  </h2>   
    </div>
    <section className="grid grid-cols-2 h-full pb-12">
      <div className=" m-auto">
      <img
            className="hidden md:block w-48 h-56 rounded-2xl mx-auto"
            src="/profilePic.jpg"
            alt="profile"
          ></img>
          </div>
          <div className="flex flex-col justify-center"> */}
      {/* tech cards */}
      {/* <div className="flex flex-wrap justify-center w-2/3 gap-4 mt-8">
      {[
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Tailwind CSS',
        'TypeScript',
        'GraphQL',
      ].map((tech) => (
        <div
          key={tech}
          className="bg-pink-100 text-pink-700 px-4 py-2 rounded-2xl shadow hover:scale-105 transition transform duration-200 cursor-default"
        >
          {tech}
        </div>
      ))}
    </div>
          </div>
    </section>
  </div>
</section> */}


      {/* portfolio intro */}
      <section id="projects" className="text-center w-full m-auto max-w-[70rem]  ">
        <div className="mx-auto p-4">
          <div className="flex">
            <h2 className=" text-4xl font-bold mt-8 bg-white dark:bg-transparent">Projects</h2>
          </div>
          <PortfolioUI
            projects={[
              {
                key: 1,
                img: "/roamLogo.jpg",
                title: "ROAM: Nation Park Finder",
                description: "Assembled and lead a team of 3 developers to create core features and intergrate third party APIs. Integrated MongoDB for robust data storage and utilized GraphQL to streamline API queries and improve frontend-backend communication.",

                link: "/projects/roam",
                gitHub: "/",
                technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
              },
              {
                key: 2,
                img: "/logoSkate.png",
                title: "GeoGuesser Clone(Skate Spot Guesser)",
                description: "Under development",
                link: "/",
                gitHub: "/",
              },
            ]}
          />
          {/* <Button variant="outline">
            <p className="p-8">View all projects</p>
            <ChevronRight className="h-4 w-4" />
          </Button> */}
        </div>
      </section>

      {/* contact */}
      <Contact />
    </div>
  );
}
