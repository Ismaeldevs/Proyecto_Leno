import { Col, Card, CardFooter, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../CSS/Cards/SelectCards.css";

const SelectCards = ({ nombre, pathD, url }) => {
  return (
    <Col md={3}>
      <br />
      <Link to={url} className="card">
        <div className="icon">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path
              fill="white"
              d={pathD}
            ></path>
          </svg>
        </div>
        <p className="title">{nombre}</p>
        <p className="text">Click para ir a sus acciones.</p>
      </Link>
    </Col>
  );
};

export default SelectCards;
