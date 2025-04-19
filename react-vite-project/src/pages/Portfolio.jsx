import PortfolioUI from "../components/UI/PortfolioUI";

export default function Portfolio() {
  return (
    <div>
      <h2 className="text-center">My Projects</h2>
      <PortfolioUI
        projects={[
          {
            key: 1,
            img: "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww",
            title: "Pet Friends",
            description: "A website for pet lovers to find pets.",

            link: "https://remix-pets.vercel.app/",
            gitHub: "https://github.com/JacobBaqleh1/remix-pets",
            technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Tailwind CSS"],
          },
          {
            key: 2,
            img: "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlYXRoZXIlMjBmb3JlY2FzdHxlbnwwfHwwfHx8MA%3D%3D",
            title: "Weather Global",
            description:
              "A website to check the weather of any city in the world.",
            link: "https://weather-global.onrender.com/",
            gitHub: "https://github.com/JacobBaqleh1/weather-global",
          },
          {
            key: 3,
            img: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VvfGVufDB8fDB8fHww",
            title: "Employee Management System",
            description: "An in terminal employee management system.",
            link: "https://github.com/JacobBaqleh1/Employee-Manager-postgresql",
            gitHub:
              "https://github.com/JacobBaqleh1/Employee-Manager-postgresql",
          },
          {
            key: 4,
            img: "https://images.unsplash.com/photo-1551522435-a13afa10f103?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGZhbmN5JTIwZ2FyYWdlfGVufDB8fDB8fHww",
            title: "Vehicle Builder Generator",
            description: "An in terminal vehicle builder generator.",
            link: "https://github.com/JacobBaqleh1/vehicle-builder-generator",
            gitHub: "https://github.com/JacobBaqleh1/vehicle-builder-generator",
          },
          {
            key: 5,
            img: "https://github.com/JacobBaqleh1/event-task-scheduler/raw/main/assets/photos/image.png",
            title: "Event Task Scheduler",
            description: "A personalized event task scheduler.",
            link: "https://github.com/JacobBaqleh1/event-task-scheduler",
            gitHub: "https://github.com/JacobBaqleh1/event-task-scheduler",
          },
          {
            key: 6,
            img: "https://images.unsplash.com/photo-1521791055366-0d553872125f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRvY3VtZW50fGVufDB8fDB8fHww",
            title: "Read Me Generator",
            description: "An in terminal read me generator.",
            link: "https://github.com/JacobBaqleh1/readme-generator",
            gitHub: "https://github.com/JacobBaqleh1/readme-generator",
          },
        ]}
      />
    </div>
  );
}
