import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_PRODUCTOS,URL_PRODUCTO_EDITAR } from '../../../../Constats/endpoints'

const EditProducto = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
        nombre: "",
        descripcion: "",
        tipo: "",
        precio: "",
        imagenProductos:"",
        // disponibilidad: 0
    }


    const [productos, setProductos] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let response = await axios.put(`${URL_PRODUCTO_EDITAR}${id}`, {
                nombre: productos.nombre,
                descripcion: productos.descripcion,
                tipo: productos.tipo,
                precio: productos.precio,
                imagenProductos:productos.imagenProductos,
                disponibilidad: productos.disponibilidad
            })
            if(response.status === 200) {
                alert("Producto Actualizado!")
                navigate('/productos')
            }
        } catch (error) {
            console.log(error)
        } }

    const getData = async () => {
        let response = await axios.get(`${URL_PRODUCTOS}/${id}`)
        console.log(response.data)
        setProductos(response.data[0])
    }

    const handleChange = (e) => {
        setProductos({...productos, [e.target.name] : e.target.value})}

    useEffect(() => {getData()}, [])

  return (
    <div>
    <h2 className="p-5 text-white text-center">EDITAR PRODUCTO</h2>
    <br />
    <div className='d-flex justify-content-center p-5'>
      <br />
      <Form onSubmit={handleSubmit}>
          <FormGroup>
              <FormControl type='text' placeholder='Nombre Producto' value={productos.nombre} onChange={handleChange} name="nombre" />
              <br />
              <FormControl type='text' placeholder='Descripcion' value={productos.descripcion} onChange={handleChange} name="descripcion" />
              <br />
              <FormControl type='text' placeholder='Tipo' value={productos.tipo} onChange={handleChange}  name="tipo" />
              <br />
              <FormControl type='text' placeholder='Precio' value={productos.precio} onChange={handleChange} name="precio" />
              <br />
              <FormControl type='text' placeholder='Url imagen' value={productos.imagenProductos} onChange={handleChange} name="imagenProductos" />
              <br />
              <FormControl type='number' placeholder='Disponible ó No (0 / 1)' value={productos.disponibilidad}  onChange={handleChange} name="disponiblidad" />
              <br />
          </FormGroup>
          <Button type='submit'>Actualizar Productos</Button>
      </Form>
</div>
  </div>
  )
}

export default EditProducto
