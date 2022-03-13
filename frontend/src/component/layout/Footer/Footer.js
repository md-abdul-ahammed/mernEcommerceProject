import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; MdAdbulAhammed</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/md-abdul-ahammed"
        >
          Github
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/mdabdulahammed/"
        >
          Linkedin
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/md.abdul.ahammed01/"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
