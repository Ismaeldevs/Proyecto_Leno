import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_CLIENTES } from '../../../../Constats/endpoints'
import "../../../../CSS/Cards/CardView.css"

const ViewClient = () => {

  const { id } = useParams()

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

      <div className="card">
        <div className="content">
          <p className="heading"> {client.nombreCliente} {client.apellidoCliente} </p>
          <p className="para">DNI: {client.dniCliente}  </p>
          <p className="para">TEL: {client.telefonoCliente} </p>
          <p className="para">DIRECCION:{client.direccionCliente} </p>
          <p className="para">ACTIVO: {client.activoCliente === 1 ? "Si" : "No"} </p>
          <Link to={'/clientes'} className="btn btn-danger">Volver a Clientes</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>
      </div>
    </div>

  )
}

export default ViewClient
