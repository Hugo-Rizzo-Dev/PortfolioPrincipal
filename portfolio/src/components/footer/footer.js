import React from "react";
import gitHubimg from "../../images/github.png";
import linkedinImg from "../../images/linkedin.png";
import RookTechIcon from "../../images/RookTechIcon.png";

function footer() {
  return (
    <footer>
      <div className="icons-footer">
        <a
          href="https://www.linkedin.com/in/seu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <img className="navImage" src={linkedinImg} alt="LinkedIn" />
          <span className="tooltip">Visite meu LinkedIn!</span>
        </a>

        <a
          href="https://github.com/Hugo-Rizzo-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img className="navImage" src={gitHubimg} alt="GitHub" />
          <span className="tooltip">Visite meu GitHub!</span>
        </a>

        <a
          href="https://www.empresa.com"
          target="_blank"
          rel="noopener noreferrer"
          className="empresa-link"
        >
          <img className="navImage" src={RookTechIcon} alt="RookTechIcon" />
          <span className="tooltip">Visite a empresa!</span>
        </a>
      </div>
    </footer>
  );
}

export default footer;
