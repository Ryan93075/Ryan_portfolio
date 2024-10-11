import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiAmazonaws,
  SiAmazonec2,
  SiAmazons3,
  SiC,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Java</p>
      </Col>
    </Row>
  );
}

export default Techstack;
