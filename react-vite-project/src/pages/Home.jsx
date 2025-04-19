import PortfolioUI from "../components/UI/PortfolioUI";
import { ChevronRight } from "lucide-react";
import Contact from "./Contact";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full ">
      <section className="relative grid w-full h-[50rem] pt-32  mx-auto overflow-hidden bg-white dark:bg-[#0f172a]">
  {/* Animated Floating Circles */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    {/* Repeat variations for natural feel */}
    {[
      { size: "w-24 h-24", top: "top-[80%]", left: "left-[10%]", color: "bg-blue-300 dark:bg-blue-800", delay: "delay-0" },
      { size: "w-44 h-44", top: "top-[60%]", left: "left-[20%]", color: "bg-green-300 dark:bg-blue-300", delay: "delay-[2s]" },
      { size: "w-32 h-32", top: "top-[90%]", left: "left-[40%]", color: "bg-purple-300 dark:bg-purple-800", delay: "delay-[5s]" },
      { size: "w-20 h-20", top: "top-[85%]", left: "left-[70%]", color: "bg-pink-300 dark:bg-pink-800", delay: "delay-[2s]" },
      { size: "w-28 h-28", top: "top-[95%]", left: "left-[80%]", color: "bg-green-300 dark:bg-green-800", delay: "delay-[3s]" },
      { size: "w-16 h-16", top: "top-[88%]", left: "left-[25%]", color: "bg-yellow-300 dark:bg-yellow-800", delay: "delay-[1s]" },
      { size: "w-12 h-12", top: "top-[93%]", left: "left-[55%]", color: "bg-red-300 dark:bg-red-800", delay: "delay-[4s]" },
      { size: "w-36 h-36", top: "top-[92%]", left: "left-[5%]", color: "bg-indigo-300 dark:bg-indigo-800", delay: "delay-[6s]" },
      { size: "w-14 h-14", top: "top-[85%]", left: "left-[90%]", color: "bg-rose-300 dark:bg-rose-800", delay: "delay-[2.5s]" },
      { size: "w-10 h-10", top: "top-[89%]", left: "left-[35%]", color: "bg-cyan-300 dark:bg-cyan-800", delay: "delay-[3.5s]" },
      { size: "w-16 h-16", top: "top-[87%]", left: "left-[75%]", color: "bg-lime-300 dark:bg-lime-800", delay: "delay-[1.5s]" },
    ].map((p, i) => (
      <div
        key={i}
        className={`rounded-full absolute ${p.top} ${p.left} ${p.size} ${p.color} opacity-30 dark:opacity-10 animate-float-slow ${p.delay}`}
      />
    ))}
  </div>

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



      <section className="relative w-full h-[30rem] overflow-hidden bg-gradient-to-b from-black via-purple-900 to-black">
  {/* <!-- Stars --> */}
  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

  {/* <!-- Glow effects for planets or stars --> */}
  <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
  <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-indigo-400 rounded-full blur-2xl opacity-25 animate-pulse"></div>

  {/* <!-- Content --> */}
  <div className="relative z-10 h-full text-center px-4 max-w-[60rem] m-auto">
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
          <div className="flex flex-col justify-center">
{/* tech cards */}
  <div className="flex flex-wrap justify-center w-2/3 gap-4 mt-8">
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
</section>
  
       
      {/* portfolio intro */}
      <section className="text-center w-full m-auto  bg-gradient-to-b from-black via-purple-900 to-black">
      <div className="max-w-[50rem] mx-auto">
        <div className="flex  ">
          <h2 className=" text-4xl font-bold mt-8 bg-white dark:bg-transparent">My Projects</h2>
          </div>
        <PortfolioUI 
          projects={[
            {
              key: 1,
              img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
              title: "ROAM: Nation Park Finder",
              description: "Description for Project 1",

              link: "/",
              gitHub: "/",
              technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
            },
            {
              key: 2,
              img: "https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5kZXIlMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D",
              title: "afsa",
              description: "This is a description for Project Two.",
              link: "/project-two",
              gitHub: "/",
            },
          ]}
        />
        <Button variant="outline">
          <p className="p-8">View all projects</p>
          <ChevronRight className="h-4 w-4" />
        </Button>
       </div>
      </section>

      {/* contact */}
      <Contact />
    </div>
  );
}
