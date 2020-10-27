import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import PDF from '../pages/jlw-resume.pdf';


function About() {
  return (
    <div>
      <Hero backgroundImage="walk.jpg">
        <h1>Welcome!</h1>
        <h3>To my development portfolio, built with React</h3>
      </Hero>
      <Container style={{ marginTop: 120, marginBottom: 120 }}>
        <Row>
          <Col size="md-6">
            <h1>Hi! I’m Jennifer.</h1>
          </Col>
          <Col size="md-6">
            <p>
              I'm a Manger, Senior Graphic Designer and Web Designer for Girls
              on the Run International in Charlotte, North Carolina.
            </p>
            <p>
              My <a href = {PDF} target = "_blank" rel="noopener noreferrer">resume</a> details more of my technical skills.
            </p>
            <p>
              I grew up in Rhode Island and have also had the pleasure of living
              in New York City and Connecticut. I currently call North Carolina
              home and spend as much time as I can traveling the world. When not
              earning American Airlines miles, you'll find me snuggling my wild
              Goldendoodle, Fozzie and silky gray cat, Maddie.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
