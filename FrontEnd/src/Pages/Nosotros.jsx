import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import matias from '../assets/img/Matias.jpeg'
import isma from '../assets/img/ismael.jpg'
import rodri from '../assets/img/rodri.jpg'
import luciano from '../assets/img/luciano.jpg'
import nahuel from '../assets/img/nahuel.jpeg'
import '../CSS/Mains/Nosotros.css'

const Nosotros = () => {
    return (
<div className="bg-white rounded-3 shadow border mx-md-5 my-5 px-4">
          <Row className="my-3 px-md-4 py-4 justify-content-center">
            <h5 className="text-center display-5 mb-4">Nuestro Equipo</h5>
            <hr />
            <Col md={4} lg={4} className="mt-3 d-flex justify-content-center">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={isma}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Ismael Chavez</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/Ismaeldevs/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i class="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/Ismaeldevs"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3 d-flex justify-content-center">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={matias}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Matias Chocobar</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/matiaschocobar/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/chocobarMatias"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3 d-flex justify-content-center">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={rodri}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Rodrigo Esper</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/RoferEsper/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/RoferEsper"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3 d-flex justify-content-center mt-md-5">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={nahuel}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Rodriguez Nahuel</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/rodrigueznahuelfederico"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/NahuFed"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3 d-flex justify-content-center mt-md-5">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={luciano}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Luciano Gatti</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/lucianodevs/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i class="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/lucianodevs/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="circle">
                          <i className="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
    );
};

export default Nosotros;