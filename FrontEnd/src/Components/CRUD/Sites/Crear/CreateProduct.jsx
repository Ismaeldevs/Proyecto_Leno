import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTO_CREAR } from '../../../../Constats/endpoints'

const CreateProduct = () => {

    const navigate = useNavigate()

    const initialState = {
        nombre: "",
        descripcion: "",
        tipo: "",
        precio: 0,
        imagenProductos:"",
        disponibilidad: 0
    }
    const [product, setProduct] = useState(initialState)

    const handleChange = (e) => {
        setProduct({...product, [e.target.name] : e.target.value})
    }

  
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let response = await axios.post(URL_PRODUCTO_CREAR, {
                nombre: product.nombre,
                descripcion: product.descripcion,
                tipo: product.tipo,
                precio: product.precio,
                imagenProductos: product.imagenProductos,
                disponibilidad: product.disponibilidad
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
                <FormControl type='text' placeholder='Nombre Producto' onChange={handleChange} name="nombre" />
                <br />
                <FormControl type='text' placeholder='Descripcion' onChange={handleChange} name="descripcion" />
                <br />
                <FormControl type='text' placeholder='Tipo' onChange={handleChange}  name="tipo" />
                <br />
                <FormControl type='number' placeholder='Precio' onChange={handleChange} name="precio" />
                <br />
                <FormControl type='text' placeholder='Url de la Imagen' onChange={handleChange} name="imagenProductos" />
                <br />
                <FormControl type='number' placeholder='Disponible ó No (0 / 1)' onChange={handleChange} name="disponibilidad" />
                <br />
            </FormGroup>
            <Button type='submit'>Crear Producto</Button>
        </Form>
</div>


    </div>
  )
}

export default CreateProduct
