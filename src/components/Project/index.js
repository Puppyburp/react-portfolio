import React from 'react';
import "./style.css";
// import {
//   Card, Button, CardImg, CardTitle, CardText,
//   CardSubtitle, CardBody
// } from 'reactstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const Project = (props) => {
  return (
      <Card>
        <Card.Img top width="100%" src={ props.image } alt="Card image cap" />
        <Card.Body>
          <Card.Title>{ props.title }</Card.Title>
          <Card.Subtitle>{ props.subtitle }</Card.Subtitle>
          <Card.Text className="cardtext">{ props.text }</Card.Text>
          <Button variant="primary" a href={ props.github }>Github</Button>{' '}          
          <Button variant="primary" a href={ props.demo }>Demo</Button>{' '}          
        </Card.Body>
      </Card>
  );
};


export default Project;
