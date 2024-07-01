import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

const ViewStock = () => {

    const {id} = useParams()

    const initialState = {
      NombreProducto: "",
      cantidadStock: "",
      fechaRegistro: "",
      nombreSucursal: "",
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)


    const getData = async () => {
        const response = await axios.get(`${URL_STOCK}/${id}`)
        console.log(response.data)
        setStock(response.data[0])
        
        
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='d-flex justify-content-center p-5'>
          <Card className='bg-dark' style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{stock.NombreProducto}</Card.Title>
        <Card.Text className='text-white'>
          Cantidad: {stock.cantidadStock}
        </Card.Text>
        <Card.Text className='text-white'>
          Fecha: {stock.fechaRegistro}
        </Card.Text>
        <Card.Text className='text-white'>
        Sucursal: {stock.nombreSucursal}
        </Card.Text>
      
      </Card.Body>
      <Link to={'/clientes'} className="btn btn-info">Volver al inicio</Link>
    </Card>
    
    </div>
  )
}

export default ViewStock