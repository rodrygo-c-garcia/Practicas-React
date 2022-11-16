import React from "react";
import Card from "react-bootstrap/Card";
import "../hojas-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="img-testimonio"
        src={props.imagen}
        alt="imagen 2"
        border="0"
      />
      <Card className="contenedor-texto-testimonio" style={{ width: "100%" }}>
        <Card.Body className="contenedor-body">
          <Card.Title className="nombre-testimonio">
            <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted cargo-testimonio">
            <strong>{props.cargo}</strong> en <strong>{props.empresa}</strong>
          </Card.Subtitle>
          <Card.Text>{props.testimonio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Testimonio;
