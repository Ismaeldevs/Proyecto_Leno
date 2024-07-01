import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_CLIENTES,URL_CLIENTE_EDITAR } from '../../../../Constats/endpoints'

const EditClient = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
        nombreCompleto: "",
        dni: "",
        telefono: "",
        direccion: "",
        activo: null
    }

    const [client, setClient] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(client.nombreCompleto, client.dni, client.telefono,client.direccion,client.activo);
            let response = await axios.put(`${URL_CLIENTE_EDITAR}${id}`, {
                nombreCompleto: client.nombreCompleto,
                dni: client.dni,
                telefono: client.telefono,
                direccion: client.direccion,
                activo: client.activo
            })
            if(response.status === 200) {
                alert("Contacto Actualizado!")
                navigate('/clientes')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const getData = async () => {
        const response = await axios.get(`${URL_CLIENTES}/${id}`)
       console.log(response.data)
        setClient(response.data[0])
        
        
    }

    const handleChange = (e) => {
        setClient({
            ...client, [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

  return (


    <div>
      <h1 className="p-5 text-white text-center">EDITAR CLIENTE</h1>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl type='text' placeholder='Nombre Completo' value={client.nombreCompleto} onChange={handleChange} name="nombreCompleto" />
                <br />
                <FormControl type='text' placeholder='DNI' value={client.dni} onChange={handleChange} name="dni" />
                <br />
                <FormControl type='text' placeholder='Telefono' value={client.telefono} onChange={handleChange}  name="telefono" />
                <br />
                <FormControl type='text' placeholder='Direccion' value={client.direccion} onChange={handleChange} name="direccion" />
                <br />
                <FormControl type='number' placeholder='Activo ó No (0 / 1)' value={client.activo} onChange={handleChange} name="activo" />
                <br />
            </FormGroup>
            <Button type='submit'>Actualizar Cliente</Button>
        </Form>
</div>
    </div>
  )
}

export default EditClient
