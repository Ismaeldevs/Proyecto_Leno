import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK,URL_STOCK_EDITAR } from '../../../../Constats/endpoints'

const EditStock = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_producto: "",
        id_sucursal: "",
        cantidadStock: "",
        fechaRegistro: "",
        
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_STOCK_EDITAR}${id}`, {
                id_producto: stock.id_producto,
                id_sucursal: stock.id_sucursal,
                cantidadStock: stock.cantidadStock,
                fechaRegistro: stock.fechaRegistro,
               
            })
            if(response.status === 200) {
                alert("Stock Actualizado!")
                navigate('/stocks')
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const getData = async () => {
        const response = await axios.get(`${URL_STOCK}/${id}`)
        console.log(response.data)
        setStock(response.data[0])
        
        
    }

    const handleChange = (e) => {
        setStock({
            ...stock, [e.target.name] : e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

  return (


    <div>
      <h2 className="p-5 text-white text-center">EDITAR STOCK</h2>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl type='number' placeholder='Nombre Producto' value={stock.id_producto} onChange={handleChange} name="id_producto"  />
                <br />
                <FormControl type='number' placeholder='Sucursal' value={stock.id_s} onChange={handleChange} name="id_sucursal"  />
                <br />
                <FormControl type='text' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                <br />
                <FormControl type='text' placeholder='FechaRegistro' value={stock.fechaRegistro} onChange={handleChange}  name="fechaRegistro" />
                <br />
                
            </FormGroup>
            <Button type='submit'>Actualizar Stock</Button>
        </Form>
</div>
    </div>
  )
}

export default EditStock
