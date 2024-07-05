import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_USUARIO } from '../../../../Constats/endpoints'
import  "../../../../CSS/Cards/CardView.css"

const ViewUser = () => {

    const {id} = useParams()

    const initialState = {
      usuario: "",
      clave: "",
      rol: 0,
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [usuario, setUsuario] = useState(initialState)


    const getData = async () => {
        const response = await axios.get(`${URL_USUARIO }/${id}`)
        console.log(response.data)
        setUsuario(response.data[0])
        
        
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <div className='d-flex justify-content-center p-5'>
      <div className="card">
        <div className="content">
          <p className="heading"> Usuario: {usuario.usuario} </p>
          <p className="para">Clave: {usuario.clave}  </p>
          <p className="para">ROL: {usuario.rol == 1 ? "Admin" : "Empleado"} </p>
          <Link to={'/usuarios'} className="btn btn-danger">Volver a Usuarios</Link>
          <Link to={'/select'} className='btn text-white bg-danger '>Volver a Inicio</Link>

        </div>
        </div>


          {/* <Card className='bg-dark' style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className='text-white'>{usuario.usuario}</Card.Title>
        <Card.Text className='text-white'>
          Clave: {usuario.clave}
        </Card.Text>
        <Card.Text className='text-white'>
          Rol: {usuario.rol == 1 ? "Admin" : "Empleado"}
        </Card.Text>
        
      
      </Card.Body>
      <Link to={'/usuarios'} className="btn btn-info">Volver al inicio</Link>
    </Card> */}
    
    </div>
  )
}

export default ViewUser
