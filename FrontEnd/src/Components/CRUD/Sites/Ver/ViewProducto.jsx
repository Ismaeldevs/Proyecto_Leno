import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTOS } from '../../../../Constats/endpoints'


// import {Card} from 'react-bootstrap'

const ViewProducto = () => {

    const {id} = useParams()

    const initialState = {
        nombreProducto: "",
        descripcionProducto: "",
        tipoProducto: "",
        precioProducto: "",
        imagenProducto:"",
        disponibilidadProducto: 0
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [productos, setProductos] = useState(initialState)


    const getData = async () => {
        let response = await axios.get(`${URL_PRODUCTOS}/${id}`)
        console.log(response.data)
        setProductos(response.data[0])
    }

    useEffect(() => {getData()}, [])

  return (
    <div className='p-5 m-5'>
        <br /><br /><br /><br /><br /><br />
      <div className="card m-5">
    <div className="card-img"><div>
      <img className='image' src={productos.imagenProducto} width={200} alt="" />
      </div></div>
    <div className="card-title">{productos.nombreProducto}</div>
    <div className="card-title">{productos.tipoProducto}</div>
    <div className="card-subtitle">{productos.descripcionProducto}</div>
    <div className="card-subtitle"> {productos.disponibilidadProducto == 1 ? "Disponible":"No Disponible"}</div>
    <hr className="card-divider" />
    <div className="card-footer">
        <div className="card-price me-3"><span>$</span>{productos.precioProducto}</div>
    </div>
    <Link to={'/productos'} className="btn btn-info">Volver al inicio</Link>
</div>

    </div>
   
  )

}

export default ViewProducto
