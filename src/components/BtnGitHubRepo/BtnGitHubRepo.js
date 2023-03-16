import "./style.css";
import GitIcon from "./icon/gitHub-black.svg";

export function BtnGitHubRepo({ link }) {
  return (
    <a href={link} className="project-detail-bth" target="_blank ">
      <img src={GitIcon} alt="github" className="gh-img" /> GitHub repo
    </a>
  );
}
