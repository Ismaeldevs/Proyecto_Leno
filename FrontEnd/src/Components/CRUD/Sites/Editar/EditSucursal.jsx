import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {URL_SUCURSAL_EDITAR, URL_SUCURSALES } from '../../../../Constats/endpoints'

const EditSucursal = () => {
    const {id} = useParams()
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

            const response = await axios.put(`${URL_SUCURSAL_EDITAR}${id}`, {
                nombre: sucursal.nombre,
                numeroSucursal: sucursal.numeroSucursal,
                direccion: sucursal.direccion,
                zonaAlcance: sucursal.zonaAlcance,
                imagenSucursales: sucursal.imagenSucursales,
                telefono: sucursal.telefono
            })
            if(response.status === 200) {
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
            ...sucursal, [e.target.name] : e.target.value
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
            <FormControl type='text' placeholder='Nombre Sucursal' value={sucursal.nombre} onChange={handleChange} name="nombre" />
                <br />
                <FormControl type='number' placeholder='Numero Sucursal' value={sucursal.numeroSucursal} onChange={handleChange} name="numeroSucursal" />
                <br />
                <FormControl type='text' placeholder='Direccion' value={sucursal.direccion} onChange={handleChange} name="direccion" />
                <br />
                <FormControl type='text' placeholder='Zona de alcance' value={sucursal.zonaAlcance} onChange={handleChange}  name="zonaAlcance" />
                <br />
                <FormControl type='text' placeholder='URL imagen' value={sucursal.imagenSucursales} onChange={handleChange} name="imagenSucursales" />
                <br />
                <FormControl type='text' placeholder='Telefono' value={sucursal.telefono} onChange={handleChange}  name="telefono" />
                <br />
            </FormGroup>
            <Button type='submit'>Actualizar Sucursal</Button>
        </Form>
</div>
    </div>
  )
};

export default EditSucursal;