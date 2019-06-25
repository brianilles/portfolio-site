import React from "react";
import styled from "styled-components";
import { Linkedin } from "styled-icons/boxicons-logos/Linkedin";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { Github } from "styled-icons/boxicons-logos/Github";
import "../scss/Contact.scss";

const DarkLinkedin = styled(Linkedin)`
  color: #000;
  height: 30px;
  width: 30px;
`;
const DarkTwitter = styled(Twitter)`
  color: #000;
  height: 30px;
  width: 30px;
`;
const DarkGithub = styled(Github)`
  color: #000;
  height: 30px;
  width: 30px;
`;
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>
        To request my resume, talk tech, or for anything else, feel free to
        contact me anytime at <span>brianrilles@gmail.com</span> or through any
        of the social media platforms below.
      </p>
      <p>
        <a href="https://www.linkedin.com/in/brian-illes/">
          <DarkLinkedin />
        </a>
        <a href="https://twitter.com/brianilles">
          <DarkTwitter />
        </a>
        <a href="https://github.com/brilles">
          <DarkGithub />
        </a>
      </p>
    </div>
  );
}

export default Contact;
