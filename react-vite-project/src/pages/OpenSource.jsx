

import { useState } from "react";

const OpenSource = () => {
    const [enlargedImg, setEnlargedImg] = useState(null);

    const openSourceProjects = [{
        id: 1,
        title: "Tenant First Aid",
        description: "Contributing to an open-source legal AI platform that helps tenants understand their rights and navigate eviction processes. I've been building responsive React components, implementing TypeScript interfaces, and creating reusable UI elements for the frontend user experience.",
        image: "/tenant.png",
        technologies: ["React", "TypeScript",],
        link: "https://tenantfirstaid.com/",
        githubUrl: "https://github.com/tenantfirstaid/tenantfirstaid",

    },

    ];

    const getLanguageColor = (language) => {
        const colors = {
            TypeScript: 'bg-blue-500',
            Python: 'bg-blue-600',
            JavaScript: 'bg-yellow-400',
            Dockerfile: 'bg-blue-400'
        };
        return colors[language] || 'bg-gray-500';
    }; return (
        <>
            {/* Enlarged Image Modal */}
            {enlargedImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setEnlargedImg(null)}
                >
                    <img
                        src={enlargedImg}
                        alt="Enlarged project"
                        className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl border-4 border-blue-400 bg-white"
                        onClick={e => e.stopPropagation()}
                    />
                </div>
            )}

            <div className="p-8  mx-auto bg-[#324154] h-screen ">
                <header className="text-center mb-12">


                </header>            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-10 w-full">
                    {openSourceProjects.map(project => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col min-h-[32rem] bg-white/80 rounded-2xl shadow-xl border border-transparent hover:border-blue-500 hover:shadow-blue-400/40 transition-all duration-300 overflow-hidden"
                        >
                            <div className="overflow-hidden rounded-xl">                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-125 cursor-pointer"
                                onClick={() => setEnlargedImg(project.image)}
                            />
                            </div>
                            <div className="flex flex-col flex-1 justify-between p-6">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-2xl font-bold text-blue-900">
                                            {project.title}
                                        </h2>

                                    </div>

                                    <p className="text-gray-700 text-base mb-4">
                                        {project.description}
                                    </p>



                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>                            </div>

                                <div className="flex gap-3">
                                    <button
                                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg shadow hover:scale-105 transition-transform"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.open(project.link, "_blank");
                                        }}
                                    >
                                        View Live Site
                                    </button>

                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </>
    );
};

export default OpenSource;