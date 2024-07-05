import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_SUCURSALES } from '../../../../Constats/endpoints'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../../../CSS/Cards/CardView.css"

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

<Container>
      <Row>
        <Col>
        
      <div className="card">
        <div className="content">
        <p className="heading"> {sucursal.nombreSucursal} </p>
          <p className="para">Numero Sucursal: {sucursal.numeroSucursal}  </p>
          <p className="para">Direccion: {sucursal.direccionSucursal} </p>
          <p className="para">Zona de Alcance: {sucursal.zonaAlcance} </p>
          <p className="para">Telefono: {sucursal.telefonoSucursal} </p>
          <Link to={'/sucursales'} className="btn btn-danger">Volver a Sucursales</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>
      </div>
        
        </Col>
        <Col>
        <img className='image' src={sucursal.imagenSucursal} width={550} height={550} alt="" />        </Col>
      </Row>
    </Container>






{/* <div className="card">
        <div className="content">
          <p className="heading"> {sucursal.nombreSucursal} </p>
          <p className="para">Numero Sucursal: {sucursal.numeroSucursal}  </p>
          <p className="para">Direccion: {sucursal.direccionSucursal} </p>
          <p className="para">Zona de Alcance: {sucursal.zonaAlcance} </p>
          <p className="para">Telefono: {sucursal.telefonoSucursal} </p>
          <Link to={'/sucursales'} className="btn btn-danger">Volver a Sucursales</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>
      </div> */}

      
    </div>
  )
};

export default ViewSucursal;