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
      <br />
      <div className='container-CRUD'>
      <br />
        <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">CREAR UNA SUCURSAL</p>
            <FormGroup>
            <Tooltip title="Nombre Sucursal">
                <FormControl type='text' placeholder='Nombre Sucursal' className="crud input" onChange={handleChange} name="nombreSucursal" required />
                        </Tooltip>
                <br />
                <Tooltip title="Numero Sucursal">
                <FormControl type='number' placeholder='Numero Sucursal' className="crud input" onChange={handleChange} name="numeroSucursal" required />
                </Tooltip>
                <br />
                <Tooltip title="Direccion Sucursal">
                <FormControl type='text' placeholder='Direccion' className="crud input" onChange={handleChange} name="direccionSucursal" required />
                </Tooltip>
                <br />
                <Tooltip title="Zona de Alcance">
                <FormControl type='text' placeholder='Zona de alcance' className="crud input" onChange={handleChange}  name="zonaAlcance" required />
                </Tooltip>
                <br />
                <Tooltip title="URL Imagen">
                <FormControl type='text' placeholder='URL imagen' className="crud input" onChange={handleChange} name="imagenSucursal" required />
                </Tooltip>
                <br />
                <Tooltip title="Telefono Sucursal">
                <FormControl type='text' placeholder='Telefono' className="crud input" onChange={handleChange}  name="telefonoSucursal" />
                </Tooltip>
                <br />
            </FormGroup>
            <div>
          <Button type="submit" className="btnCRUD">
            Crear Sucursal
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/sucursales'} className='text-decoration-none text-white'>Volver a Sucursales</Link></button>
          </div>
        </Form>
</div>
    </div>
  )
};

export default CreateSucursal;