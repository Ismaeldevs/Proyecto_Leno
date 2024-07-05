import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK } from '../../../../Constats/endpoints'

const ViewStock = () => {

  const { id } = useParams()

  const [date, setDate] = useState("")

  const initialState = {
    NombreProducto: "",
    cantidadStock: "",
    fechaRegistroStock: "",
    nombreSucursal: "",
  }

  // const [nombreCompleto, setNombreCompleto] = useState("")
  const [stock, setStock] = useState(initialState)


  const getData = async () => {
    const response = await axios.get(`${URL_STOCK}/${id}`)
    console.log(response.data)
    setStock(response.data[0])
    setDate(new Date(response.data[0].fechaRegistroStock).toJSON().slice(0, 10))


  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='d-flex justify-content-center p-5'>



      <div className="card">
        <div className="content">
          <p className="heading"> {stock.NombreProducto} {stock.apellidoCliente} </p>
          <p className="para">Cantidad: {stock.cantidadStock}  </p>
          <p className="para">Fecha: {date} </p>
          <p className="para">Sucursal: {stock.nombreSucursal} </p>
          <Link to={'/stocks'} className="btn btn-danger">Volver a Stock</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>
      </div>

    </div>
  )
}

export default ViewStock