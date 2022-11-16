import React from "react";
import Card from "react-bootstrap/Card";
import "../hojas-estilo/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="img-testimonio"
        src="https://i.ibb.co/xC8SRrY/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png"
        alt="imagen 2"
        border="0"
      />
      <Card className="contenedor-texto-testimonio" style={{ width: "100%" }}>
        <Card.Body className="contenedor-body">
          <Card.Title className="nombre-testimonio">
            Shawn Wang en Singapur
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted cargo-testimonio">
            Ingeniero de Software en Amazon
          </Card.Subtitle>
          <Card.Text>
            &quot;Da miedo cambiar de carrera. Solo gané la confianza de que
            podía programar trabajando a través de los cientos de horas de
            lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un
            trabajo de seis cifras como ingeniero de software.{" "}
            <b>freeCodeCamp cambió mi vida.&quot;</b>{" "}
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Testimonio;
