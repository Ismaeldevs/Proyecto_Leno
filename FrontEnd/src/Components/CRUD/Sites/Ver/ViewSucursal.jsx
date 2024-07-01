import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_SUCURSALES } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

const ViewSucursal = () => {
    const {id} = useParams()

    const initialState = {
        nombre: "",
        numeroSucursal: 0,
        direccion: "",
        zonaAlcance: "",
        imagenSucursales: "",
        telefono: ""
    }


    const [sucursal, setSucursal] = useState(initialState)

    const getData = async () => {
        const response = await axios.get(`${URL_SUCURSALES}/${id}`)
        console.log(response.data)
        setSucursal(response.data[0])              
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='d-flex justify-content-center p-5'>
          <Card className='bg-light' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{sucursal.nombre}</Card.Title>
        <Card.Text>
          Numero Sucursal: {sucursal.numeroSucursal}
        </Card.Text>
        <Card.Text>
        DIRECCION: {sucursal.direccion}
        </Card.Text>
        <Card.Text>
         ZONA DE ALCANCE: {sucursal.zonaAlcance}
        </Card.Text>
        <Card.Text>
         TELEFONO: {sucursal.telefono}
        </Card.Text>
      </Card.Body>
      <Link to={'/sucursales'} className="btn btn-info">Volver al inicio</Link>
    </Card>
    
    </div>
  )
};

export default ViewSucursal;