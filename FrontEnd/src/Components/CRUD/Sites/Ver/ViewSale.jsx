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

<div className="card">
  <div className="content">
    <p className="heading">Venta Hecha #{sale.id_Venta}</p>
    <p className="para">Producto: <strong>{sale.Producto}</strong></p>
    <p className="para">Cliente: <strong>{sale.NombreCompletoCliente}</strong> </p>
    <p className="para">Empleado: <strong>{sale.NombreCompletoEmpleado}</strong></p>
    <p className="para">Fecha de la Venta: <strong>{sale.FechaVenta}</strong> </p>
    <p className="para">Tipo de Pago: <strong>{sale.TipoDePago}</strong></p>
    <p className="para">Total Facturado: <strong>${sale.TotalFacturado}</strong></p>
    <Link to={'/ventas'} className="btn btn-danger">Volver a Ventas</Link>
    <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

  </div>
</div>
</div>

  )
}

export default ViewSale
