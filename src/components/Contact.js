import React from "react";
import Tabs from "./Tabs";
import "../scss/Contact.scss";
import styled from "styled-components";
import { Twitter } from "styled-icons/boxicons-logos/Twitter";
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare";
import { Mail } from "styled-icons/material/Mail";

const TwitterDark = styled(Twitter)`
  color: #0066ff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  margin-right: 5px;
`;

const LinkedinDark = styled(LinkedinSquare)`
  color: #0066ff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  margin-right: 5px;
`;

const MailDark = styled(Mail)`
  color: #0066ff;
  height: 20px;
  width: 20px;
  border-radius: 50px;
  margin-right: 5px;
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
