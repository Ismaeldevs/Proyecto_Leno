import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_SUCURSALES, URL_SUCURSAL_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'

const MainSucursal = () => {
    const [data,setData] = useState([])

    const getData = async () => {
     const response = await axios.get(URL_SUCURSALES)
     console.log(response.data)
    setData(response.data)
    }
  
    const handleChange = async (id_sucursal) => {
  
      const response = await axios.delete(`${URL_SUCURSAL_ELIMINAR}${id_sucursal}`)
      if(response) {
        alert("Sucursal eliminada!")
      }
    }
  
  useEffect(() => {
    getData()
  }, [])
  
    return (
      <div>
        <h1 className="text-center text-white p-5">MODIFICA TUS SUCURSALES</h1>
        <Link to={`/sucursales/create`} className='btn text-white bg-success m-5'>CREAR SUCURSAL</Link>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>N° Sucursal</th>
            <th>Direccion</th>
            <th>Zona</th>
            <th>URL Imagen</th>
            <th>Telefono</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
        {data.map((sucursal) =>
                  <tr key={sucursal.id_sucursal}>
                  <td>{sucursal.id_sucursal}</td>
                  <td>{sucursal.nombre}</td>
                  <td>{sucursal.numeroSucursal}</td>
                  <td>{sucursal.direccion}</td>
                  <td>{sucursal.zonaAlcance}</td>
                  <td>{sucursal.imagenSucursales}</td>
                  <td>{sucursal.telefono}</td>
                  <td>
                    {<Link to={`/sucursales/view/${sucursal.id_sucursal}`}><i className="me-3 text-primary fa-solid fa-eye"></i></Link>}
                    {<Link to={`/sucursales/edit/${sucursal.id_sucursal}`}><i className="me-3 text-warning fa-solid fa-pen-to-square"></i></Link>}
                    {<button onClick={() => handleChange(sucursal.id_sucursal)}><i className="text-danger fa-solid fa-trash"></i></button>}
                  </td>
                </tr>
        )}
        </tbody>
      </Table>
      </div>
    )
};

export default MainSucursal;