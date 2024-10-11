import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Brendan Ryan</span> from <span className="purple">Chennai, India</span>.
            <br /> I'm currently pursuing a <span className="purple">Bachelor's in Computer Science (B.E CSE)</span> at St. Joseph's Institute of Technology.
            <br />
            With <span className="purple">8 months of hands-on experience</span> as a <span className="purple">Cloud Developer </span>intern, I’ve contributed to significant projects in the cloud domain, specializing in <span className="purple">AWS</span> and <span className="purple">cloud-native applications</span>.
            <br />
            <br />
            🚀 My professional journey includes developing an <span className="purple">AI chatbot</span> for <span className="purple">cloud infrastructure automation</span> at <span className="purple">HiAiDo</span> and creating a <span className="purple">cloud-native solution</span> for cargo delivery and passenger rides at <span className="purple">Tesys India Pvt Ltd</span>. 
            <br />
            I've sharpened my skills in services like <span className="purple">AWS Lambda</span>, <span className="purple">AppSync</span>, and <span className="purple">S3</span>, ensuring scalable and efficient cloud solutions.
            <br />
            <br />
            🎯 I’m also passionate about challenges, securing <span className="purple">1st Place</span> at the 2024 <span className="purple">Rajasthan Police Hackathon</span> for building a real-time <span className="purple">financial fraud detection system</span> that helped combat fraud with an impressive <span className="purple">98% accuracy</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
