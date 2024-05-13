import { projects } from "../constants"
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  return (
    <section id="projects" className="max-container">
      <h3 className="text-3xl font-bold leading-normal mb-8 text-center">
        Projects
      </h3>
      <div className="max-container flex justify-center flex-wrap gap-10">
        {projects.map((item) => (
          <ProjectCard key={item.label} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Project