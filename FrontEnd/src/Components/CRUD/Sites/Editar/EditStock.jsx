import { useState, useEffect } from 'react'
import {Button, Form, FormControl, FormGroup} from 'react-bootstrap'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK,URL_STOCK_EDITAR } from '../../../../Constats/endpoints'

const EditStock = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_Producto: "",
        id_Sucursal: "",
        cantidadStock: "",
        fechaRegistroStock: ""
        
    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)
    const [date, setDate] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const response = await axios.put(`${URL_STOCK_EDITAR}${id}`, {
                id_Producto: stock.id_Producto,
                id_Sucursal: stock.id_Sucursal,
                cantidadStock: stock.cantidadStock,
                fechaRegistroStock: date,
               
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
        const date = new Date(response.data[0].fechaRegistroStock).toJSON().slice(0, 10)
        setDate(date)
        
        
    }

    const handleChange = (e) => {
        setStock({
            ...stock, [e.target.name] : e.target.value
        })
        setDate({
            ...date, [e.target.name] : e.target.value
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
                <FormControl type='text' placeholder='Producto' value={stock.NombreProducto} onChange={handleChange} name="id_Producto"  />
                <br />
                <FormControl type='text' placeholder='Sucursal' value={stock.nombreSucursal} onChange={handleChange} name="id_Sucursal"  />
                <br />
                <FormControl type='text' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                <br />
                <FormControl type='text' placeholder='FechaRegistro' value={date} onChange={handleChange} name="fechaRegistroStock" />
                <br />
                
            </FormGroup>
            <Button type='submit'>Actualizar Stock</Button>
        </Form>
</div>
    </div>
  )
}

export default EditStock
