import PortfolioUI from "../components/UI/PortfolioUI";
import projects from "../data/projects";

export default function Home() {
  return (
    <section className="bg-[#324154] min-h-screen w-full overflow-x-hidden">
      <PortfolioUI projects={projects} />
    </section>
  );
}
