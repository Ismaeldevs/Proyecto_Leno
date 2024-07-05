import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTOS, URL_PRODUCTO_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const EditProducto = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        nombreProducto: "",
        descripcionProducto: "",
        tipoProducto: "",
        precioProducto: "",
        imagenProducto: "",
    }


    const [productos, setProductos] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let response = await axios.put(`${URL_PRODUCTO_EDITAR}${id}`, {
                nombreProducto: productos.nombreProducto,
                descripcionProducto: productos.descripcionProducto,
                tipoProducto: productos.tipoProducto,
                precioProducto: productos.precioProducto,
                imagenProducto: productos.imagenProducto,
            })
            if (response.status === 200) {
                alert("Producto Actualizado!")
                navigate('/productos')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getData = async () => {
        let response = await axios.get(`${URL_PRODUCTOS}/${id}`)
        console.log(response.data)
        setProductos(response.data[0])
    }

    const handleChange = (e) => {
        setProductos({ ...productos, [e.target.name]: e.target.value })
    }

    useEffect(() => { getData() }, [])

    return (
        <div>
            <h2 className="p-5 text-white text-center">EDITAR PRODUCTO</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre del Producto">
                            <FormControl type='text' placeholder='Nombre Producto' value={productos.nombreProducto} onChange={handleChange} name="nombreProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Descripcion del Producto">
                            <FormControl type='text' placeholder='Descripcion' value={productos.descripcionProducto} onChange={handleChange} name="descripcionProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Tipo de Producto">
                            <FormControl type='text' placeholder='Tipo' value={productos.tipoProducto} onChange={handleChange} name="tipoProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Precio Producto">
                            <FormControl type='text' placeholder='Precio' value={productos.precioProducto} onChange={handleChange} name="precioProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="URL Imagen">
                            <FormControl type='text' placeholder='Url imagen' value={productos.imagenProducto} onChange={handleChange} name="imagenProducto" />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Actualizar Productos</Button>
                    <Link to={'/productos'} className='btn text-white bg-danger '>Volver a Productos</Link>

                </Form>
            </div>
        </div>
    )
}

export default EditProducto
