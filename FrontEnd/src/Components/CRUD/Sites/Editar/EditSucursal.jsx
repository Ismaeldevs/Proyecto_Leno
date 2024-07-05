import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_SUCURSAL_EDITAR, URL_SUCURSALES } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const EditSucursal = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        nombreSucursal: "",
        numeroSucursal: 0,
        direccionSucursal: "",
        zonaAlcance: "",
        imagenSucursal: "",
        telefonoSucursal: ""
    }

    const [sucursal, setSucursal] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_SUCURSAL_EDITAR}${id}`, {
                nombreSucursal: sucursal.nombreSurcursal,
                numeroSucursal: sucursal.numeroSucursal,
                direccionSucursal: sucursal.direccion,
                zonaAlcance: sucursal.zonaAlcance,
                imagenSucursal: sucursal.imagenSucursal,
                telefonoSucursal: sucursal.telefonoSucursal
            })
            if (response.status === 200) {
                alert("Sucursal Actualizada!")
                navigate('/sucursales')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async () => {
        const response = await axios.get(`${URL_SUCURSALES}/${id}`)
        console.log(response.data)
        setSucursal(response.data[0])


    }

    const handleChange = (e) => {
        setSucursal({
            ...sucursal, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (


        <div>
            <h1 className="p-5 text-white text-center">EDITAR SUCURSAL</h1>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre Sucursal">
                            <FormControl type='text' placeholder='Nombre Sucursal' value={sucursal.nombreSucursal} onChange={handleChange} name="nombreSucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero Sucursal">
                            <FormControl type='number' placeholder='Numero Sucursal' value={sucursal.numeroSucursal} onChange={handleChange} name="numeroSucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion de Sucursal">
                            <FormControl type='text' placeholder='Direccion' value={sucursal.direccionSucursal} onChange={handleChange} name="direccionSucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Zona de Alcance">
                            <FormControl type='text' placeholder='Zona de alcance' value={sucursal.zonaAlcance} onChange={handleChange} name="zonaAlcance" />
                        </Tooltip>
                        <br />
                        <Tooltip title="URL Imagen">
                            <FormControl type='text' placeholder='URL imagen' value={sucursal.imagenSucursal} onChange={handleChange} name="imagenSucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono Sucursal">
                            <FormControl type='text' placeholder='Telefono' value={sucursal.telefonoSucursal} onChange={handleChange} name="telefonoSucursal" />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Actualizar Sucursal</Button>
                    <Link to={'/sucursales'} className='btn text-white bg-danger '>Volver a Sucursal</Link>

                </Form>
            </div>
        </div>
    )
};

export default EditSucursal;