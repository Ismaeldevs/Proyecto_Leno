import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTOS } from '../../../../Constats/endpoints'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../../../CSS/Cards/CardView.css"


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


<Container>
      <Row>
        <Col>
        
      <div className="card">
        <div className="content">
          <p className="heading"> {productos.nombreProducto} </p>
          <p className="para">Tipo: {productos.tipoProducto}  </p>
          <p className="para">Descripcion: {productos.descripcionProducto} </p>
          <p className="para">ACTIVO: {productos.disponibilidadProducto == 1 ? "Disponible":"No Disponible"} </p>
          <Link to={'/productos'} className="btn btn-danger">Volver a Productos</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>
      </div>
        
        </Col>
        <Col>
        <img className='image' src={productos.imagenProducto} width={550} height={550} alt="" />        </Col>
      </Row>
    </Container>


    </div>
   
  )

}

export default ViewProducto
