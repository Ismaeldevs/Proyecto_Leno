import { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {URL_EMPLEADO, URL_EMPLEADO_ELIMINAR} from '../../Constats/endpoints'
import {Link} from 'react-router-dom'

const MainEmpleado = () => {

  const [data,setData] = useState([])

  const getData = async () => {
   const response = await axios.get(URL_EMPLEADO)
   console.log(response.data)
  setData(response.data)
  }

  const handleChange = async (id) => {

    try {

      const response = await axios.put(`${URL_EMPLEADO_ELIMINAR}${id}`)
      if(response) {
        alert("Empleado eliminado!")
        
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
      <h2 className="text-center text-white p-5">MODIFICA TUS EMPLEADOS</h2>
      <Link to={`/empleados/create`} className='btn text-white bg-success m-5'>CREAR EMPLEADO</Link>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>NOMBRE COMPLETO</th>
          <th>SUCURSAL</th>
          <th>CUIL</th>
          <th>TELEFONO</th>
          <th>MAIL</th>
          <th>DIRECCION</th>
          <th>ACCIONES</th>

        </tr>
      </thead>
      <tbody>
      {data.map((empleado) =>
                <tr key={empleado.id_Empleado}>
                <td>{empleado.id_Empleado}</td>
                <td>{empleado.nombreEmpleado} {empleado.apellidoEmpleado}</td>
                <td>{empleado.NombreSucursal}</td>
                <td>{empleado.cuilEmpleado}</td>
                <td>{empleado.telefonoEmpleado}</td>
                <td>{empleado.mailEmpleado}</td>
                <td>{empleado.direccionEmpleado}</td>
                <td>
                  {<Link to={`/empleados/view/${empleado.id_Empleado}`}><i className="me-3 text-primary fa-solid fa-eye"></i></Link>}
                  {<Link to={`/empleados/edit/${empleado.id_Empleado}`}><i className="me-3 text-warning fa-solid fa-pen-to-square"></i></Link>}
                  {<button onClick={() => handleChange(empleado.id_Empleado)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default MainEmpleado