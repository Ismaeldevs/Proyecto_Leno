import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_STOCK, URL_STOCK_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'

const MainStock = () => {

  const [data,setData] = useState([])

  const getData = async () => {
   const response = await axios.get(URL_STOCK)
   console.log(response.data)
  setData(response.data)
  }

  const handleChange = async (id_stock) => {

    const response = await axios.delete(`${URL_STOCK_ELIMINAR}${id_stock}`)
    if(response) {
      alert("Stock Eliminado!")
    }
  }

useEffect(() => {
  getData()
}, [])


  return (
    <div>
      <h1 className="text-center text-white p-5">MODIFICA EL STOCK</h1>


      
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
      {data.map((stock) =>
                <tr key={stock.id_stock}>
                <td>{stock.id_stock}</td>
                <td>{stock.NombreProducto}</td>
                <td>{stock.cantidadStock}</td>
                <td>{stock.fechaRegistro}</td>
                <td>{stock.nombreSucursal}</td>
                
                <td>
                  {<Link to={`/stocks/view/${stock.id_stock}`}>
                  <i className="me-3 text-primary fa-solid fa-eye">
                    </i>
                    </Link>}

                  {<Link to={`/stocks/edit/${stock.id_stock}`}>

                 
                  <i className="me-3 text-warning fa-solid fa-pen-to-square">
                    
                  </i>
                
                  </Link>}


                  {<button onClick={() => handleChange(stock.id_stock)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default MainStock
