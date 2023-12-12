import React from "react";
import "./SocialIcon.css";
import { Linkedin } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import { Telegram } from "react-bootstrap-icons";

export default function SocialIcon({iconW}) {
  return (
    <div className="d-flex gap-2">
      <div>
        <a
          href="http://www.linkedin.com/in/saeid-shojaei-a8724a233"
          target="blank"
          rel="noreferrer"
          className={`${iconW ? "SocialIcon-w" : "SocialIcon"}`}
        >
          <Linkedin className="white-t" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/saeidsh777"
          target="_blank"
          rel="noreferrer"
          className={`${iconW ? "SocialIcon-w" : "SocialIcon"}`}
        >
          <Github className="white-t"/>
        </a>
      </div>
      <div>
        <a
          href="https://t.me/saeidshojaei777"
          target="blank"
          rel="noreferrer"
          className={`${iconW ? "SocialIcon-w" : "SocialIcon"}`}
        >
          <Telegram className="white-t" />
        </a>
      </div>
    </div>
  );
}
