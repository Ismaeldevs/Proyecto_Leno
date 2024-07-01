import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_SUCURSAL_CREAR } from '../../../../Constats/endpoints'

const CreateSucursal = () => {
    const navigate = useNavigate()

    const initialState = {
        nombre: "",
        numeroSucursal: 0,
        direccion: "",
        zonaAlcance: "",
        imagenSucursales: "",
        telefono: ""
    }


    const [sucursal, setSucursal] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_SUCURSAL_CREAR}`, {
                nombre: sucursal.nombre,
                numeroSucursal: sucursal.numeroSucursal,
                direccion: sucursal.direccion,
                zonaAlcance: sucursal.zonaAlcance,
                imagenSucursales: sucursal.imagenSucursales,
                telefono: sucursal.telefono
            })
            if(response.status === 200) {
                alert("Sucursal Creada!")
                navigate('/sucursales')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleChange = (e) => {
        setSucursal({
            ...sucursal, [e.target.name] : e.target.value
        })
    }

  return (
    <div>
      <h1 className="p-5 text-white text-center">CREAR SUCURSAL</h1>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl type='text' placeholder='Nombre Sucursal' onChange={handleChange} name="nombre" />
                <br />
                <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="numeroSucursal" />
                <br />
                <FormControl type='text' placeholder='Direccion' onChange={handleChange} name="direccion" />
                <br />
                <FormControl type='text' placeholder='Zona de alcance' onChange={handleChange}  name="zonaAlcance" />
                <br />
                <FormControl type='text' placeholder='URL imagen' onChange={handleChange} name="imagenSucursales" />
                <br />
                <FormControl type='text' placeholder='Telefono' onChange={handleChange}  name="telefono" />
                <br />
            </FormGroup>
            <Button type='submit'>Crear Sucursal</Button>
        </Form>
</div>
    </div>
  )
};

export default CreateSucursal;