import "./../styles/main.css";

export function Home() {
  return (
    <header className="header">
      <div className="container">
        <div id="header-img" className="header-wrapper">
          <h1 className="header-title">
            <strong>
              Hi, my name is <em>Sergey</em>
            </strong>{" "}
            <br />a frontend developer
          </h1>
          <p className="header-text">with passion for learning and creating.</p>
          <a href="https://github.com/appsaf2k" target="_blank" rel="noreferrer" className="btn">
            Go to my GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
