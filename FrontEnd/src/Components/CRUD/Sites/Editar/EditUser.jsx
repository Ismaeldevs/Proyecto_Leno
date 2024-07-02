import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_USUARIO,URL_USUARIO_EDITAR } from '../../../../Constats/endpoints'

const EditUser = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
        usuario: "",
        clave: "",
        rol: null,   
    }

    
    const [usuario, setUsuario] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_USUARIO_EDITAR}${id}`, {
              usuario: usuario.usuario,
              clave: usuario.clave,
                rol: usuario.rol == "Admin" ? 1 : 0,
            })
            if(response.status === 200) {
                alert("Usuario Actualizado!")
                navigate('/usuarios')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const getData = async () => {
        const response = await axios.get(`${URL_USUARIO}/${id}`)
        console.log(response.data)
        setUsuario(response.data[0])
        
        
    }

    const handleChange = (e) => {
      setUsuario({
            ...usuario, [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

  return (


    <div>
      <h2 className="p-5 text-white text-center">EDITAR USUARIO</h2>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl type='text' placeholder='Usuario' value={usuario.usuario} onChange={handleChange} name="usuario"  />
                <br />
                <FormControl type='text' placeholder='Clave' value={usuario.clave} onChange={handleChange} name="clave"  />
                <br />
                <FormControl type='text' placeholder='Rol' value={usuario.rol == 1 ? "Admin" : "Empleado"} onChange={handleChange} name="rol" />
                <br />
               
                
            </FormGroup>
            <Button type='submit'>Actualizar Stock</Button>
        </Form>
</div>
    </div>
  )
}

export default EditUser