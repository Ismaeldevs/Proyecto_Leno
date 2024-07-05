import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_PEDIDO } from '../../../../Constats/endpoints'
import "../../../../CSS/Cards/CardView.css"

const ViewPedido = () => {

  const { id } = useParams()

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


      <div className="card">
        <div className="content">
          <p className="heading"> {pedido.NombreProducto} {pedido.apellidoCliente} </p>
          <p className="para">Cliente: {pedido.NombreCompletoCliente}  </p>
          <p className="para">Sucursal: {pedido.NombreSucursal} </p>
          <p className="para">Empleado: {pedido.NombreCompletoEmpleado} </p>
          <p className="para">Fecha: {pedido.fechaDetallePedido} </p>
          <Link to={'/pedidos'} className="btn btn-danger">Volver a Pedidos</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>

      </div>

    </div>
  )
}

export default ViewPedido