import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

const ViewEmployee = () => {

    const {id} = useParams()

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
          <Card className='bg-light' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>NOMBRE: {employee.nombreEmpleado} {employee.apellidoEmpleado}</Card.Title>
        <Card.Text>
          SUCURSAL: {employee.id_Sucursal}
        </Card.Text>
        <Card.Text>
          CUIL: {employee.cuilEmpleado}
        </Card.Text>
        <Card.Text>
          TEL: {employee.telefonoEmpleado}
        </Card.Text>
        <Card.Text>
        MAIL: {employee.mailEmpleado}
        </Card.Text>
        <Card.Text>
         DIRECCION: {employee.direccionEmpleado}
        </Card.Text>
      </Card.Body>
      <Link to={'/empleados'} className="btn btn-info">Volver a empleados</Link>
    </Card>
    
    </div>
  )
}

export default ViewEmployee