import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { URL_PRODUCTOS, URL_PRODUCTO_ELIMINAR } from "../../Constats/endpoints";
import { Link } from "react-router-dom";
import Buscador from "../Layouts/Buscador";
// import {Row,Col} from "react-bootstrap"

const MainProducto = () => {
  const [data, setData] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL_PRODUCTOS);
    console.log(response.data);
    setData(response.data);
    setDataFiltrada(response.data);
  };

  const filtrarDatos = (terminoBusqueda) => {
    const busqueda = data.filter(
      (datum) =>
        datum.nombreProducto.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.tipoProducto.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.descripcionProducto.toLowerCase().trim().includes(terminoBusqueda)
    );
    setDataFiltrada(busqueda);
  };

  const handleChange = async (id) => {
    try {
      const response = await axios.put(`${URL_PRODUCTO_ELIMINAR}${id}`);
      if (response) {
        alert("Producto eliminado!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1 className="text-center text-white p-5">PRODUCTOS</h1>
      <Buscador filtrarDatos={filtrarDatos} />
      <Link to={`/productos/create`} className="btn text-white bg-success m-5">
        AGREGAR PRODUCTO
      </Link>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Producto</th>
            <th>Descripcion</th>
            <th>Tipo</th>
            <th>Precio</th>
            <th>Imagen Producto</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltrada.map((producto) => (
            <tr key={producto.id_Producto}>
              <td>{producto.id_Producto}</td>
              <td>{producto.nombreProducto}</td>
              <td>{producto.descripcionProducto}</td>
              <td>{producto.tipoProducto}</td>
              <td>{producto.precioProducto}</td>
              <td>
                <img
                  className="image"
                  src={producto.imagenProducto}
                  width={200}
                  alt=""
                />
              </td>
              <td>
                {
                  <Link to={`/productos/view/${producto.id_Producto}`}>
                    <i className="me-3 text-primary fa-solid fa-eye"></i>
                  </Link>
                }
                {
                  <Link to={`/productos/edit/${producto.id_Producto}`}>
                    <i className="me-3 text-warning fa-solid fa-pen-to-square"></i>
                  </Link>
                }
                {
                  <button onClick={() => handleChange(producto.id_Producto)}>
                    <i className="text-danger fa-solid fa-trash"></i>
                  </button>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='d-flex justify-content-center'>
    <Link to={'/select'} className= " btn btn-danger w-25 mb-5 mt-3 " >Volver a inicio</Link>
    </div>
    </div>
  );
};

export default MainProducto;
