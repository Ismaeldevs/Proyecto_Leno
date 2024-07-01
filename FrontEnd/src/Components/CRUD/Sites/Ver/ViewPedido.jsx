import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

const ViewPedido = () => {

    const {id} = useParams()

    const initialState = {
      NombreProducto: "",
      NombreCliente: "",
      NombreSucursal: "",
      NombreEmpleado: "",
      fecha: ""
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [pedido, setPedido] = useState(initialState)


    const getData = async () => {
        const response = await axios.get(`${URL_PEDIDO}/${id}`)
        console.log(response.data)
        setPedido(response.data[0])
        
        
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='d-flex justify-content-center p-5'>
          <Card className='bg-dark' style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>PRODUCTO: {pedido.NombreProducto}</Card.Title>
        <Card.Text className=' text-white'>
          CLIENTE: {pedido.NombreCliente}
        </Card.Text>
        <Card.Text className=' text-white'>
          SUCURSAL: {pedido.NombreSucursal}
        </Card.Text>
        <Card.Text className=' text-white'>
          EMPLEADO: {pedido.NombreEmpleado}
        </Card.Text>
        <Card.Text className=' text-white'>
        FECHA: {pedido.fecha}
        </Card.Text>
      </Card.Body>
      <Link to={'/pedidos'} className="btn btn-info">Volver a pedidos</Link>
    </Card>
    
    </div>
  )
}

export default ViewPedido