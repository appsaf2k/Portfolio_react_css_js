import "./../styles/main.css";
import { projectsList } from "../utils/projectsList";
import { Project } from "./../components/Project/Project";

export function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-h2">Projects</h2>
        <ul className="projects">
          {projectsList.map((project, index) => {
            return (
              <Project
                id={index}
                key={project.title}
                title={project.title}
                skills={project.skills}
                img={project.img}
                link={project.link}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
