


export default function Roam() {
    const project = {
        key: 1,
        img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
        title: "ROAM: Nation Park Finder",
        description: "ROAM is the perfect platform for outdoor enthusiasts who want to explore new destinations, discover hidden gems in their own 'backyard', and save dream locations for future adventures.",

        link: "/",
        gitHub: "/",
        technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
    }
    return (
        <>

            <div className=" gap-10 mt-4 max-w-[1100px] flex justify-center items-center m-auto ">


                <div
                    key={project.key}
                    className="grid grid-cols-1  gap-4 border shadow-md   "
                >
                    {/* Content on the left */}
                    <div className="flex flex-col  pr-8">
                        <h1 className="text-4xl font-extrabold m-4">{project.title}</h1>

                        <p className="mt-2 text-2xl">{project.description}</p>

                        <div className="my-8 flex justify-around ">


                            <a
                                href="https://roam-sigma.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative w-40 h-16 border border-gray-800 rounded-md my-16 ml-8"
                            >
                                <button
                                    className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 transition-transform duration-300 hover:translate-x-0 hover:-translate-y-0 bg-blue-400 text-white px-4 py-2 rounded-md w-40 h-16 text-xl font-bold"
                                >
                                    View Live Site
                                </button>
                            </a>
                            <div className="flex flex-col gap-4 m-4">
                                <h2>Stack</h2>
                                {project.technologies?.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="bg-black text-white px-2 py-1 rounded text-sm shadow dark:bg-white dark:text-black"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>

                        </div>
                        {/* <Link to={project.gitHub} className="text-blue-500 mt-2 block">
                    View GitHub Repo
                  </Link> */}
                    </div>

                    {/* Image on the right */}
                    <div>
                        <video src="/roam-gif.mp4"
                            className=" h-auto rounded-md pointer-events-none"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </div>
                </div>

            </div>
        </>
    )
}