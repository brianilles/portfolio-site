import React from "react";
import Tabs from "./Tabs";
import "../scss/Contact.scss";
import styled from "styled-components";
import { Github } from "styled-icons/boxicons-logos/Github";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "styled-icons/material/Mail";

const GithubDark = styled(Github)`
  color: #0066ff;
  height: 35px;
  width: 35px;
`;

const TwitterDark = styled(Twitter)`
  color: #0066ff;
  height: 35px;
  width: 35px;
`;

const LinkedinDark = styled(LinkedinSquare)`
  color: #0066ff;
  height: 35px;
  width: 35px;
`;

const MailDark = styled(Mail)`
  color: #0066ff;
  height: 35px;
  width: 35px;
`;

export default function Contact() {
  return (
    <div>
      <div className="top contact-wrapper">
        <h2 className="contact">Contact</h2>
        <div className="links">
          <a href="https://www.linkedin.com/in/brian-illes/">
            <LinkedinDark /> LinkedIn
          </a>
          <a href="https://twitter.com/brianilles">
            <TwitterDark /> Twitter
          </a>
          <a href="mailto:brianrilles@gmail.com">
            <MailDark /> Email
          </a>
          <a href="https://github.com/brilles">
            <GithubDark /> Github
          </a>
        </div>
        <div className="email">
          <p>brianrilles@gmail.com</p>
        </div>
      </div>
      <div className="bottom">
        <Tabs />
      </div>
    </div>
  );
}
