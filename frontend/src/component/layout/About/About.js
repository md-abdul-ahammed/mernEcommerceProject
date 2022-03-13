import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.linkedin.com/in/mdabdulahammed/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://i.imgur.com/guRgqA6.jpg"
              alt="mdabdulahammed"
            />
            <Typography>Md Abdul Ahammed</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Linkedin
            </Button>
            <span>
              I am a MERN stack developer. I have one year of experience with
              the full stack development sector(MERN). Also I have one year of
              experience with WordPress and Shopify on fiverr. <br />I am ready
              to work for any company as a full-stack developer or front-end
              developer.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Important Links</Typography>
            <a
              href="https://github.com/md-abdul-ahammed"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className="githubSvgIcon" />
            </a>

            <a
              href="https://www.linkedin.com/in/mdabdulahammed/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
