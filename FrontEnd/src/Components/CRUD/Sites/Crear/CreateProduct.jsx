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
      <br />
      <div className='container-CRUD'>
      <br />
                <br />
                <Form className='formCRUD' onSubmit={handleSubmit}>
                <p className="titleCRUD">CREAR UN PRODUCTO</p>
                    <FormGroup>
                        <Tooltip title="Nombre del Producto">
                            <FormControl type='text' placeholder='Nombre Producto' className="crud input" onChange={handleChange} name="nombreProducto" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Descripcion del Producto">
                            <FormControl type='text' placeholder='Descripcion' className="crud input" onChange={handleChange} name="descripcionProducto" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Tipo Prodcuto">
                            <FormControl type='text' placeholder='Tipo' className="crud input" onChange={handleChange} name="tipoProducto" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="Precio Producto">
                            <FormControl type='number' placeholder='Precio' className="crud input" onChange={handleChange} name="precioProducto" required />
                        </Tooltip>
                        <br />
                        <Tooltip title="URL Imagen">
                            <FormControl type='text' placeholder='Url de la Imagen' className="crud input" onChange={handleChange} name="imagenProducto" required />
                        </Tooltip>
                        <br />
                    </FormGroup>
                    <div>
          <Button type="submit" className="btnCRUD">
            Crear Producto
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/productos'} className='text-decoration-none text-white'>Volver a Productos</Link></button>
          </div>
                </Form>
            </div>


        </div>
    )
}

export default CreateProduct
