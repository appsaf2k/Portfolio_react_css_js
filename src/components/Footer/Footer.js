import "./style.css";
import gitHub from "./icons/gitHub.png";
import vk from "./icons/vk.png";
import instagram from "./icons/instagram.png";
import linkedIn from "./icons/linkedIn.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="socials">
          <li className="social__item">
            <a href="https://vk.com/andreev2k" target="_blank" rel="noreferrer">
              <img src={vk} alt="vk" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.instagram.com/andreev2k/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://github.com/appsaf2k" target="_blank" rel="noreferrer">
              <img src={gitHub} alt="github" />
            </a>
          </li>
          <li className="social__item">
            <a href="https://www.linkedin.com/in/sergey-andreev-87b430258/" target="_blank" rel="noreferrer">
              <img src={linkedIn} alt="linkedIn" />
            </a>
          </li>
        </ul>
        <div className="parag">
          <p>© 2022 frontend-dev</p>
        </div>
      </div>
    </footer>
  );
}
