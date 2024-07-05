import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_VENTAS } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'


const ViewSale = () => {

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
    const [sale, setSale] = useState(initialState)


    const getData = async () => {
        const response = await axios.get(`${URL_VENTAS}/${id}`)
        console.log(response.data)
        setSale(response.data[0])
        
        
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='d-flex justify-content-center p-5'>
          <Card className='bg-light' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Venta Hecha #{sale.id_Venta}</Card.Title>
        <Card.Text>
          Producto: <strong>{sale.Producto}</strong>
        </Card.Text>
        <Card.Text>
          Cliente: <strong>{sale.NombreCompletoCliente}</strong>
        </Card.Text>
        <Card.Text>
          Empleado: <strong>{sale.NombreCompletoEmpleado}</strong>
        </Card.Text>
        <Card.Text>
          Fecha de la Venta: <strong>{sale.FechaVenta}</strong>
        </Card.Text>
        <Card.Text>
          Tipo de Pago: <strong>{sale.TipoDePago}</strong>
        </Card.Text>
        <Card.Text>
          Total Facturado: <strong>${sale.TotalFacturado}</strong>
        </Card.Text>
      </Card.Body>
      <Link to={'/ventas'} className="btn btn-info">Volver al inicio</Link>
    </Card>
    
    </div>
  )
}

export default ViewSale
