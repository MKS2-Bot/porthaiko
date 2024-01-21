import React from "react";
import Card from "react-bootstrap/Card";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Haiko </span>
            from <span className="purple"> France.</span>
            <br />
            I currently work on 3 public Discord bots as well as at Ezly Heberg.
            <br />
            I'm currently in my final year of secondary school and I'm planning to go into IT development or architecture.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdOutlineKeyboardDoubleArrowRight /> Playing Sport
            </li>
            <li className="about-activity">
              <MdOutlineKeyboardDoubleArrowRight /> Listening To Music
            </li>
            <li className="about-activity">
              <MdOutlineKeyboardDoubleArrowRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
