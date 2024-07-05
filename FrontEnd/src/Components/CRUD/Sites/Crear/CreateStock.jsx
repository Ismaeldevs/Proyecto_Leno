import { useState } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK_CREAR } from '../../../../Constats/endpoints'

const CreateStock = () => {

    const navigate = useNavigate()

    const initialState = {
        id_Producto: "",
        id_Sucursal:"",
        fechaRegistroStock: "",
        cantidadStock: "",
        descripcionStock: "",
        activoStock: 0,
    }


    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.post(`${URL_STOCK_CREAR}`, {
                id_Producto: stock.id_Producto,
                id_Sucursal:stock.id_Sucursal,
                fechaRegistroStock: stock.fechaRegistroStock,
                cantidadStock: stock.cantidadStock,
                descripcionStock: stock.descripcionStock,
                activoStock: stock.activoStock,
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
                <FormControl type='number' placeholder='Nombre Producto' value={stock.NombreProducto} onChange={handleChange} name="id_Producto"  />
                <br />
                <FormControl type='number' placeholder='Sucursal' value={stock.nombreSucursal} onChange={handleChange} name="id_Sucursal"  />
                <br />
                <FormControl type='text' placeholder='FechaRegistro' value={stock.fechaRegistro} onChange={handleChange}  name="fechaRegistroStock" />
                <br />
                <FormControl type='number' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                <br />
                <FormControl type='text' placeholder='descripcion' value={stock.descripcion} onChange={handleChange} name="descripcionStock"  />
                <br />
                
            </FormGroup>
            <Button type='submit'>Crear Stock</Button>
        </Form>
</div>
    </div>
  )
}

export default CreateStock
