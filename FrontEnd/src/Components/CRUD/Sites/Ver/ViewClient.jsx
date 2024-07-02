import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_CLIENTES } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

const ViewClient = () => {

    const {id} = useParams()

    const initialState = {
        nombreCliente: "",
        apellidoCliente: "",
        dniCliente: "",
        telefonoCliente: "",
        direccionCliente: "",
        activoCliente: null
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [client, setClient] = useState(initialState)


    const getData = async () => {
        const response = await axios.get(`${URL_CLIENTES}/${id}`)
        console.log(response.data)
        setClient(response.data[0])
        
        
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='d-flex justify-content-center p-5'>
          <Card className='bg-light' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{client.nombreCliente} {client.apellidoCliente}</Card.Title>
        <Card.Text>
          DNI: {client.dniCliente}
        </Card.Text>
        <Card.Text>
          TEL: {client.telefonoCliente}
        </Card.Text>
        <Card.Text>
        DIRECCION: {client.direccionCliente}
        </Card.Text>
        <Card.Text>
         ACTIVO: {client.activoCliente ? "Si" : "No"}
        </Card.Text>
      </Card.Body>
      <Link to={'/clientes'} className="btn btn-info">Volver al inicio</Link>
    </Card>
    
    </div>
  )
}

export default ViewClient
