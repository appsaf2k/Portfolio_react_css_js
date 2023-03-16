import "./../styles/main.css";
import { useParams } from "react-router-dom";
import { projectsList } from "../utils/projectsList";
import { BtnGitHubRepo } from "../components/BtnGitHubRepo/BtnGitHubRepo";

export function ProjectDetails() {
  const { id } = useParams();
  const project = projectsList[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h2 className="title-h2">{project.title}</h2>
          <img src={project.img} alt="project1" className="project-detail-img" />
          <h3 className="project-details-title">{project.skills}</h3>
          <BtnGitHubRepo link={project.link} />
        </div>
      </div>
    </main>
  );
}
