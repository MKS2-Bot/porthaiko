import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiLink } from "react-icons/hi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <HiLink /> &nbsp;
          {props.isBlog ? "Blog" : "Link 1"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <HiLink /> &nbsp;
            {"Link 2"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
