import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { URL_CLIENTES, URL_CLIENTE_ELIMINAR } from "../../Constats/endpoints";
import { Link } from "react-router-dom";
import Buscador from "../Layouts/Buscador";

const MainCliente = () => {
  const [data, setData] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL_CLIENTES);
    console.log(response.data);
    setData(response.data);
    setDataFiltrada(response.data);
  };

  const filtrarDatos = (terminoBusqueda) => {
    const busqueda = data.filter(
      (datum) =>
        datum.nombreCliente.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.dniCliente.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.apellidoCliente.toLowerCase().trim().includes(terminoBusqueda)
    );
    setDataFiltrada(busqueda);
  };

  const handleChange = async (id) => {
    try {
      const response = await axios.put(`${URL_CLIENTE_ELIMINAR}${id}`);
      if (response) {
        alert("Cliente eliminado!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="text-center text-white p-5">MODIFICA TUS CLIENTES</h2>
      <Buscador filtrarDatos={filtrarDatos} />
      <Link to={`/clientes/create`} className="btn text-white bg-success m-5">
        CREAR CLIENTE
      </Link>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre Completo</th>
            <th>DNI</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {dataFiltrada.map((client) => (
            <tr key={client.id_Cliente}>
              <td>{client.id_Cliente}</td>
              <td>
                {client.nombreCliente} {client.apellidoCliente}
              </td>
              <td>{client.dniCliente}</td>
              <td>{client.telefonoCliente}</td>
              <td>{client.direccionCliente}</td>
              <td>
                {
                  <Link to={`/clientes/view/${client.id_Cliente}`}>
                    <i className="me-3 text-primary fa-solid fa-eye"></i>
                  </Link>
                }
                {
                  <Link to={`/clientes/edit/${client.id_Cliente}`}>
                    <i className="me-3 text-warning fa-solid fa-pen-to-square"></i>
                  </Link>
                }
                {
                  <button onClick={() => handleChange(client.id_Cliente)}>
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
    </>
    
  );
};

export default MainCliente;
