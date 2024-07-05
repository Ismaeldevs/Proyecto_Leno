import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTO_CREAR } from '../../../../Constats/endpoints'

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
        setProduct({...product, [e.target.name] : e.target.value})
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

            if(response.status === 200) {
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
                <FormControl type='text' placeholder='Nombre Producto' onChange={handleChange} name="nombreProducto" />
                <br />
                <FormControl type='text' placeholder='Descripcion' onChange={handleChange} name="descripcionProducto" />
                <br />
                <FormControl type='text' placeholder='Tipo' onChange={handleChange}  name="tipoProducto" />
                <br />
                <FormControl type='number' placeholder='Precio' onChange={handleChange} name="precioProducto" />
                <br />
                <FormControl type='text' placeholder='Url de la Imagen' onChange={handleChange} name="imagenProducto" />
                <br />
                <FormControl type='number' placeholder='Disponible ó No (0 / 1)' onChange={handleChange} name="disponibilidadProducto" />
                <br />
            </FormGroup>
            <Button type='submit'>Crear Producto</Button>
        </Form>
</div>


    </div>
  )
}

export default CreateProduct
