import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK_CREAR } from '../../../../Constats/endpoints'

const CreateStock = () => {

    const navigate = useNavigate()

    const initialState = {
        id_producto: "",
        cantidadStock: "",
        fechaRegistro: "",
        id_sucursal: "",
        descripcion: "",
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_STOCK_CREAR}`, {
                id_producto: stock.id_producto,
                id_sucursal: stock.id_sucursal,
                cantidadStock: stock.cantidadStock,
                fechaRegistro: stock.fechaRegistro,
                descripcion: stock.descripcion
            })
            if(response.status === 200) {
                alert("Stock Creado!")
                navigate('/stocks')

            }
          
        } catch (error) {
            console.log(error) 
        }
        
    }

    const handleChange = (e) => {
        setStock({
            ...stock, [e.target.name] : e.target.value
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
                <FormControl type='number' placeholder='Nombre Producto' value={stock.NombreProducto} onChange={handleChange} name="id_producto"  />
                <br />
                <FormControl type='number' placeholder='Sucursal' value={stock.nombreSucursal} onChange={handleChange} name="id_sucursal"  />
                <br />
                <FormControl type='text' placeholder='FechaRegistro' value={stock.fechaRegistro} onChange={handleChange}  name="fechaRegistro" />
                <br />
                <FormControl type='text' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                <br />
                <FormControl type='text' placeholder='descripcion' value={stock.descripcion} onChange={handleChange} name="descripcion"  />
                <br />
                
            </FormGroup>
            <Button type='submit'>Crear Stock</Button>
        </Form>
</div>
    </div>
  )
}

export default CreateStock
