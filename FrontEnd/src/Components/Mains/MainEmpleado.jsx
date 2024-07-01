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

  const handleChange = async (id_empleado) => {

    const response = await axios.delete(`${URL_EMPLEADO_ELIMINAR}${id_empleado}`)
    if(response) {
      alert("Empleado eliminado!")
      
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
          <th>SUCURSAL</th>
          <th>NOMBRE COMPLETO</th>
          <th>CUIL</th>
          <th>TELEFONO</th>
          <th>MAIL</th>
          <th>DIRECCION</th>
          <th>ACCIONES</th>

        </tr>
      </thead>
      <tbody>
      {data.map((empleado) =>
                <tr key={empleado.id_empleado}>
                <td>{empleado.id_empleado}</td>
                <td>{empleado.NombreSucursal}</td>
                <td>{empleado.nombreCompleto}</td>
                <td>{empleado.cuil}</td>
                <td>{empleado.telefono}</td>
                <td>{empleado.mail}</td>
                <td>{empleado.direccion}</td>
                <td>
                  {<Link to={`/empleados/view/${empleado.id_empleado}`}><i className="me-3 text-primary fa-solid fa-eye"></i></Link>}
                  {<Link to={`/empleados/edit/${empleado.id_empleado}`}><i className="me-3 text-warning fa-solid fa-pen-to-square"></i></Link>}
                  {<button onClick={() => handleChange(empleado.id_empleado)}><i className="text-danger fa-solid fa-trash"></i></button>}
                </td>
              </tr>
      )}
      </tbody>
    </Table>
    </div>
  )
}

export default MainEmpleado