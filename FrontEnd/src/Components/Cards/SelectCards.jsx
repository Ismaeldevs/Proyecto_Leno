import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../CSS/Cards/SelectCards.css";

const SelectCards = ({ nombre, pathD, url }) => {
  return (
    <Col md={3}>
      <br />
      <Link to={url} className="card-categorias text-decoration-none">
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
