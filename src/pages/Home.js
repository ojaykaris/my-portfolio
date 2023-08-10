import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, My Name is Ojone Agbonika</h2>
        <div className="prompt">
          <p>
            I'm a dedicated front-end developer with a passion for crafting
            engaging and user-centric web experiences. I specialize in
            translating design concepts into polished, responsive and
            interactive websites that not only look visually appealing but also
            provide seamless functionality across different devices and
            browsers.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,
              IONIC, Bootstrap, MatrialUI, yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Developer Tools</h2>
            <span> Visual Studio Code, GitHub, ChromeDevtools</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python and TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
