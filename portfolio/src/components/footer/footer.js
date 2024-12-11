import React from "react";
import gitHubimg from "../../images/icons/github.png";
import linkedinImg from "../../images/icons/linkedin.png";
import RookTechIcon from "../../images/icons/RookTechIcon.png";

function footer() {
  return (
    <footer>
      <div className="icons-footer">
        <a
          href="https://www.linkedin.com/in/hugo-rizzo-4847a91a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <img className="navImage" src={linkedinImg} alt="LinkedIn" />
          <span className="tooltip">LinkedIn!</span>
        </a>

        <a
          href="https://github.com/Hugo-Rizzo-Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          <img className="navImage" src={gitHubimg} alt="GitHub" />
          <span className="tooltip">GitHub!</span>
        </a>

        <a
          href="https://rook-tech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="empresa-link"
        >
          <img className="navImageRT" src={RookTechIcon} alt="RookTechIcon" />
          <span className="tooltip">Rook Tech!</span>
        </a>
      </div>
    </footer>
  );
}

export default footer;
