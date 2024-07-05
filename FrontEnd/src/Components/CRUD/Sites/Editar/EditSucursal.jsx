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
      <br />
      <div className="container-CRUD">
        <br />
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                <p className="titleCRUD">EDITA UNA SUCURSAL</p>
                    <FormGroup>
                        <Tooltip title="Nombre Sucursal">
                            <FormControl type='text' placeholder='Nombre Sucursal' value={sucursal.nombreSucursal} className="crud input" onChange={handleChange} name="nombreSucursal" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero Sucursal">
                            <FormControl type='number' placeholder='Numero Sucursal' value={sucursal.numeroSucursal} className="crud input" onChange={handleChange} name="numeroSucursal" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Direccion de Sucursal">
                            <FormControl type='text' placeholder='Direccion' value={sucursal.direccionSucursal} className="crud input" onChange={handleChange} name="direccionSucursal" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Zona de Alcance">
                            <FormControl type='text' placeholder='Zona de alcance' value={sucursal.zonaAlcance} className="crud input" onChange={handleChange} name="zonaAlcance" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="URL Imagen">
                            <FormControl type='text' placeholder='URL imagen' value={sucursal.imagenSucursal} className="crud input" onChange={handleChange} name="imagenSucursal" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Telefono Sucursal">
                            <FormControl type='text' placeholder='Telefono' value={sucursal.telefonoSucursal} className="crud input" onChange={handleChange} name="telefonoSucursal" required />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <div>
          <Button type="submit" className="btnCRUD">
            Actualizar Sucursal
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

export default EditSucursal;