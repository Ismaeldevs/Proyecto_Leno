import { useState, useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_USUARIO } from '../../../../Constats/endpoints'
import {Card} from 'react-bootstrap'

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
          <Card className='bg-dark' style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{usuario.usuario}</Card.Title>
        <Card.Text className='text-white'>
          Clave: {usuario.clave}
        </Card.Text>
        <Card.Text className='text-white'>
          Rol: {usuario.rol}
        </Card.Text>
        
      
      </Card.Body>
      <Link to={'/usuarios'} className="btn btn-info">Volver al inicio</Link>
    </Card>
    
    </div>
  )
}

export default ViewUser
