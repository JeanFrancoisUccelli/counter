import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/JeanFrancoisUccelli">
        <GitHubIcon color="primary" fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/jeff-uccelli/">
        <LinkedInIcon color="primary" fontSize="large" />
      </a>
    </div>
  );
}

export default Footer;
