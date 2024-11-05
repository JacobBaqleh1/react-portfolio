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
            title: "afsa",
            description: "Description for Project 1",

            link: "/",
            gitHub: "/",
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
    </div>
  );
}
