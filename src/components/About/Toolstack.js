import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiLinux,
  SiAndroidstudio,
  SiDocker,
  SiAnsible,
  SiKubernetes,
  SiTerraform,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnsible />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Ansible</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Android Studio</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTerraform />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Terraform</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Docker</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Kubernetes</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>Postman</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
