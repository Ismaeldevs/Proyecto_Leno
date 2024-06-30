import { Table } from "react-bootstrap";
import Buscador from "../Buscador";
import axios from "axios";
import {useEffect, useState } from "react";

const MainCliente = () => {
  const [clientes, setClientes] = useState([]);

  const showClientes = async () => {
    let response = await axios.get(`http://localhost:8000/clientes`);
    setClientes(response.data);
   
  };

useEffect( ()=>{
  showClientes()
},[])


  return (
    <div>
      <h1 className="text-center text-white p-5">MODIFICA TUS CLIENTES</h1>
      <Buscador />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre Completo</th>
            <th>DNI</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => 
            <tr key={cliente.id_cliente}>
              <td>{cliente.id_cliente}</td>
              <td>{cliente.nombreCompleto}</td>
              <td>{cliente.telefono}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.activo}</td>
            </tr>
          )}
        </tbody>
      </Table>



    
    </div>
  );
};

export default MainCliente;
