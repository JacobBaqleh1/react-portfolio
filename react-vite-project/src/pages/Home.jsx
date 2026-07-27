import PortfolioUI from "../components/UI/PortfolioUI";
import projects, { teamProjects } from "../data/projects";

export default function Home() {
  return (
    <section className="bg-[#324154] min-h-screen w-full overflow-x-hidden">
      <div className="px-6 sm:px-10 pt-6 sm:pt-10">
        <PortfolioUI
          projects={projects}
          title="My Projects"
          className="pb-4"
        />
        <PortfolioUI
          projects={teamProjects}
          title="Team Projects"
          showTechStack
          className="pt-0 -mt-2 sm:-mt-3"
          headingClassName="mb-4"
        />
      </div>
    </section>
  );
}
