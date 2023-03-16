import "./../../styles/main.css";
import { NavLink } from "react-router-dom";

// шаблон для отображения содержимого в проектах
export function Project({ title, img, id }) {
  return (
    <NavLink to={`/project/` + id} className="project">
      <li>
        <img src={img} alt="project1" className="project-img" />
        <h3 className="project-title">{title}</h3>
      </li>
    </NavLink>
  );
}
