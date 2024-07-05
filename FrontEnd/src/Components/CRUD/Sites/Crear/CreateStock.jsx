import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK_CREAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const CreateStock = () => {

    const navigate = useNavigate()

    const initialState = {
        id_Producto: "",
        cantidadStock: "",
        fechaRegistroStock: "",
        id_Sucursal: "",
        descripcionStock: "",
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_STOCK_CREAR}`, {
                id_Producto: stock.id_Poducto,
                id_Sucursal: stock.id_Sucursal,
                cantidadStock: stock.cantidadStock,
                fechaRegistroStock: stock.fechaRegistroStock,
                descripcionStock: stock.descripcionStock
            })
            if (response.status === 200) {
                alert("Stock Creado!")
                navigate('/stocks')

            }

        } catch (error) {
            console.log(error)
        }

    }

    const handleChange = (e) => {
        setStock({
            ...stock, [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1 className="p-5 text-white text-center">CREAR STOCK</h1>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre del Producto">
                        <FormControl type='number' placeholder='Numero Producto' value={stock.NombreProducto} onChange={handleChange} name="id_Producto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Numero Sucursal">
                        <FormControl type='number' placeholder='Sucursal' value={stock.nombreSucursal} onChange={handleChange} name="id_Sucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Fecha Registro">
                        <FormControl type='text' placeholder='FechaRegistro' value={stock.fechaRegistroStock} onChange={handleChange} name="fechaRegistroStock" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Cantidad Stock">
                        <FormControl type='text' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Descripcion">
                        <FormControl type='text' placeholder='descripcion' value={stock.descripcionStock} onChange={handleChange} name="descripcionStock" />
                        </Tooltip>
                        <br />

                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Crear Stock</Button>
                    <Link to={'/stocks'} className='btn text-white bg-danger '>Volver a Stock</Link>

                </Form>
            </div>
        </div>
    )
}

export default CreateStock
