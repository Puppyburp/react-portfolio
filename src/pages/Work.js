import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";
import project from "./project.json";

function Work() {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        {/* row 1 */}
        <Col size="md-4">
          <Project
            title={project[0].title}
            subtitle={project[0].subtitle}
            image={project[0].image}
            text={project[0].text}
            github={project[0].github}
            demo={project[0].demo}
          />
        </Col>
        <Col size="md-4">
          <Project
            title={project[1].title}
            subtitle={project[1].subtitle}
            image={project[1].image}
            text={project[1].text}
            github={project[1].github}
            demo={project[1].demo}
          />
        </Col>
        <Col size="md-4">
          <Project
            title={project[2].title}
            subtitle={project[2].subtitle}
            image={project[2].image}
            text={project[2].text}
            github={project[2].github}
            demo={project[2].demo}
          />
        </Col>
        </Row>
        {/* start row 2 */}
        <Row style={{ marginTop: 30 }}>
        <Col size="md-4" >
          <Project
            title={project[3].title}
            subtitle={project[3].subtitle}
            image={project[3].image}
            text={project[3].text}
            github={project[3].github}
            demo={project[3].demo}
          />
        </Col>
        <Col size="md-4">
          <Project
            title={project[4].title}
            subtitle={project[4].subtitle}
            image={project[4].image}
            text={project[4].text}
            github={project[4].github}
            demo={project[4].demo}
          />
        </Col>
        <Col size="md-4">
          <Project
            title={project[5].title}
            subtitle={project[5].subtitle}
            image={project[5].image}
            text={project[5].text}
            github={project[5].github}
            demo={project[5].demo}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Work;
