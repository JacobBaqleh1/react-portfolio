import PortfolioUI from "../components/UI/PortfolioUI";
import projects, { clientProjects, teamProjects } from "../data/projects";

export default function Home() {
  return (
    <section className="bg-[#324154] min-h-screen w-full overflow-x-hidden">
      <div className="flex flex-col gap-8 px-6 sm:px-10 pt-6 sm:pt-10 pb-10">
        <PortfolioUI
          projects={clientProjects}
          title="Client Work"
        />
        <PortfolioUI
          projects={projects}
          title="My Projects"
          headingClassName="mb-4"
        />
        <PortfolioUI
          projects={teamProjects}
          title="Team Projects"
          showTechStack
          headingClassName="mb-4"
        />
      </div>
    </section>
  );
}
