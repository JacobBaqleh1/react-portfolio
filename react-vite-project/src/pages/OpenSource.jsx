import PortfolioUI from "../components/UI/PortfolioUI";
import { teamProjects } from "../data/projects";

export default function OpenSource() {
  return (
    <section className="bg-[#324154] min-h-screen w-full overflow-x-hidden">
      <PortfolioUI projects={teamProjects} title="Team Projects" />
    </section>
  );
}
