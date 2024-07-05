import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate, Link} from 'react-router-dom'
import axios from 'axios'
import { URL_SUCURSAL_CREAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';

const CreateSucursal = () => {
    const navigate = useNavigate()

    const initialState = {
        nombreSucursal: "",
        numeroSucursal: 0,
        direccionSucursal: "",
        zonaAlcance: "",
        imagenSucursales: "",
        telefonoSucursal: ""
    }


    const [sucursal, setSucursal] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_SUCURSAL_CREAR}`, {
                nombreSucursal: sucursal.nombreSucursal,
                numeroSucursal: sucursal.numeroSucursal,
                direccionSucursal: sucursal.direccionSucursal,
                zonaAlcance: sucursal.zonaAlcance,
                imagenSucursal: sucursal.imagenSucursal,
                telefonoSucursal: sucursal.telefonoSucursal
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
            <Tooltip title="Nombre Sucursal">
                <FormControl type='text' placeholder='Nombre Sucursal' onChange={handleChange} name="nombreSucursal" />
                        </Tooltip>
                <br />
                <Tooltip title="Numero Sucursal">
                <FormControl type='number' placeholder='Numero Sucursal' onChange={handleChange} name="numeroSucursal" />
                </Tooltip>
                <br />
                <Tooltip title="Direccion Sucursal">
                <FormControl type='text' placeholder='Direccion' onChange={handleChange} name="direccionSucursal" />
                </Tooltip>
                <br />
                <Tooltip title="Zona de Alcance">
                <FormControl type='text' placeholder='Zona de alcance' onChange={handleChange}  name="zonaAlcance" />
                </Tooltip>
                <br />
                <Tooltip title="URL Imagen">
                <FormControl type='text' placeholder='URL imagen' onChange={handleChange} name="imagenSucursal" />
                </Tooltip>
                <br />
                <Tooltip title="Telefono Sucursal">
                <FormControl type='text' placeholder='Telefono' onChange={handleChange}  name="telefonoSucursal" />
                </Tooltip>
                <br />
            </FormGroup>
            <Button type='submit' className='btn btn-danger mx-2'>Crear Sucursal</Button>
            <Link to={'/sucursales'} className='btn text-white bg-danger '>Volver a Sucursales</Link>

        </Form>
</div>
    </div>
  )
};

export default CreateSucursal;