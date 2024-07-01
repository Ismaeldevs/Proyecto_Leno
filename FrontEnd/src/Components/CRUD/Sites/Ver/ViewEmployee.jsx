import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

const ViewEmployee = () => {

    const {id} = useParams()

    const initialState = {
        nombreCompleto: "",
        NombreSucursal: "",
        dni: "",
        telefono: "",
        direccion: "",
        activo: 0
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
        <Card.Title>NOMBRE: {employee.nombreCompleto}</Card.Title>
        <Card.Text>
          SUCURSAL: {employee.NombreSucursal}
        </Card.Text>
        <Card.Text>
          CUIL: {employee.cuil}
        </Card.Text>
        <Card.Text>
          TEL: {employee.telefono}
        </Card.Text>
        <Card.Text>
        MAIL: {employee.mail}
        </Card.Text>
        <Card.Text>
         DIRECCION: {employee.direccion}
        </Card.Text>
      </Card.Body>
      <Link to={'/empleados'} className="btn btn-info">Volver a empleados</Link>
    </Card>
    
    </div>
  )
}

export default ViewEmployee