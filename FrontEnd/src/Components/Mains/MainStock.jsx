import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_STOCK, URL_STOCK_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'
import Buscador from '../Layouts/Buscador'

const MainStock = () => {

  const [data,setData] = useState([])
  const [dataFiltrada, setDataFiltrada] = useState([]);

  const getData = async () => {
   const response = await axios.get(URL_STOCK)
   console.log(response.data)
   setData(response.data)
   setDataFiltrada(response.data);
  }

  const filtrarDatos = (terminoBusqueda) => {
    const busqueda = data.filter(
      (datum) =>
        datum.NombreProducto.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.nombreSucursal.toLowerCase().trim().includes(terminoBusqueda) ||
        datum.fechaRegistroStock.toLowerCase().trim().includes(terminoBusqueda)
    );
    setDataFiltrada(busqueda);
  };

  const handleChange = async (id) => {

    try {

      const response = await axios.put(`${URL_STOCK_ELIMINAR}${id}`)
      if(response) {
        alert("Stock eliminado!")
        
      }
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
  getData()
}, [])


  return (
    <div>
      <h2 className="text-center text-white p-5">MODIFICA EL STOCK</h2>
      <Buscador filtrarDatos={filtrarDatos} />

      
      <Link to={`/stocks/create`} className='btn text-white bg-success m-5'>CREAR STOCK</Link>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Producto</th>
          <th>CantidadStock</th>
          <th>FechaRegistro</th>
          <th>Sucursal</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
      {dataFiltrada.map((stock) =>
                <tr key={stock.id_Stock}>
                <td>{stock.id_Stock}</td>
                <td>{stock.NombreProducto}</td>
                <td>{stock.cantidadStock}</td>
                <td>{new Date(stock.fechaRegistroStock).toJSON().slice(0, 10)}</td>
                <td>{stock.nombreSucursal}</td>
                
                <td>
                  {<Link to={`/stocks/view/${stock.id_Stock}`}>
                  <i className="me-3 text-primary fa-solid fa-eye">
                    </i>
                    </Link>}

                  {<Link to={`/stocks/edit/${stock.id_Stock}`}>

                 
                  <i className="me-3 text-warning fa-solid fa-pen-to-square">
                    
                  </i>
                
                  </Link>}


                  {<button onClick={() => handleChange(stock.id_Stock)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default MainStock
