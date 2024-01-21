import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ezly from "../../Assets/Projects/ezly.png";
import artix from "../../Assets/Projects/artix.png";
import AstralCobalt from "../../Assets/Projects/astral&cobalt.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AstralCobalt}
              isBlog={false}
              title="Astral & Cobalt"
              description="Are you looking for a certified bot Discord dedicated to the total management of your server? Introducing Astral and Cobalt, 100% free bots that let you manage your server all by yourself!"
              ghLink="https://discord.gg/uyF63QU5WX"
              demoLink="https://discord.gg/UsDsyeXZRU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artix}
              isBlog={false}
              title="Artix"
              description="I'm in the process of creating an extraordinary bot that can manage all your servers on its own. It has over 200 commands as well as premium commands. A customised version is also possible!"
              ghLink="https://discord.gg/k3XJBZYcA6"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezly}
              isBlog={false}
              title="Ezly Heberg"
              description="You want to host your bot or website but all the hosting offers are too expensive? Introducing Ezly Heberg, the best secure hosting at an unbeatable price!"
              ghLink="https://discord.gg/PREPHKdCFp"
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                You are interested in a <span className="purple"> Project </span> with me ?
              </h1>
              <p className="home-about-body">
                <br />You can contact me on Discord:
                <i>
                  <b className="purple"> .333_ </b>
                </i>
                <br />
                <br />
                Or join my Discord server:&nbsp;
                <i>
                  <b className="purple">https://discord.gg/9aa9Tedxuy</b>
                </i>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Projects;
