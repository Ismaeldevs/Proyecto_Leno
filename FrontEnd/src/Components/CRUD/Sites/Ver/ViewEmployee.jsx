import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO } from '../../../../Constats/endpoints'
import "../../../../CSS/Cards/CardView.css"


const ViewEmployee = () => {

  const { id } = useParams()

  const initialState = {
    nombreEmpleado: "",
    apellidoEmpleado: "",
    id_Sucursal: "",
    cuilEmpleado: "",
    telefonoEmpleado: "",
    direccionEmpleado: ""
  }

  // const [nombreCompleto, setNombreCompleto] = useState("")
  const [employee, setEmployee] = useState(initialState)


  const getData = async () => {
    const response = await axios.get(`${URL_EMPLEADO}/${id}`)
    console.log(response.data)
    setEmployee(response.data[0])


  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='d-flex justify-content-center p-5'>


      <div className="card">
        <div className="content">
          <p className="heading"> {employee.nombreEmpleado} {employee.apellidoEmpleado} </p>
          <p className="para">Sucursal: {employee.id_Sucursal}  </p>
          <p className="para">CUIL: {employee.cuilEmpleado} </p>
          <p className="para">TEL:{employee.telefonoEmpleado} </p>
          <p className="para">Direccion: {employee.direccionEmpleado} </p>
          <Link to={'/empleados'} className="btn btn-danger">Volver a Empleados</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>

      </div>
    </div>

  )
}

export default ViewEmployee