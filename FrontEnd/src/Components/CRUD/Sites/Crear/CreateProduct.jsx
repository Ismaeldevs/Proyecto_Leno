import { useState } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTO_CREAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const CreateProduct = () => {

    const navigate = useNavigate()

    const initialState = {
        nombreProducto: "",
        descripcionProducto: "",
        tipoProducto: "",
        precioProducto: 0,
        imagenProducto:"",
        disponibilidadProducto: 0
    }
    const [product, setProduct] = useState(initialState)

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let response = await axios.post(URL_PRODUCTO_CREAR, {
                nombreProducto: product.nombreProducto,
                descripcionProducto: product.descripcionProducto,
                tipoProducto: product.tipoProducto,
                precioProducto: product.precioProducto,
                imagenProducto: product.imagenProducto,
                disponibilidadProducto: product.disponibilidadProducto
            })

            if (response.status === 200) {
                alert("Producto Creado!")
                navigate('/productos')
            }
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div>
            <h1 className="p-5 text-white text-center">CREAR PRODUCTO</h1>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre del Producto">
                            <FormControl type='text' placeholder='Nombre Producto' onChange={handleChange} name="nombreProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Descripcion del Producto">
                            <FormControl type='text' placeholder='Descripcion' onChange={handleChange} name="descripcionProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Tipo Prodcuto">
                            <FormControl type='text' placeholder='Tipo' onChange={handleChange} name="tipoProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Precio Producto">
                            <FormControl type='number' placeholder='Precio' onChange={handleChange} name="precioProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="URL Imagen">
                            <FormControl type='text' placeholder='Url de la Imagen' onChange={handleChange} name="imagenProducto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Disponible (0 / 1)">
                            <FormControl type='number' placeholder='Disponible ó No (0 / 1)' onChange={handleChange} name="disponibilidadProducto" />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Crear Producto</Button>
                    <Link to={'/productos'} className='btn text-white bg-danger '>Volver a Productos</Link>

                </Form>
            </div>


        </div>
    )
}

export default CreateProduct
