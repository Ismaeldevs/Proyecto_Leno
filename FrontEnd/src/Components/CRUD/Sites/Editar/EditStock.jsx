import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { URL_STOCK,URL_STOCK_EDITAR, URL_SUCURSALES,URL_PRODUCTOS  } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';


const EditStock = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        // nombreProducto:"",
        // nombreSucursal:"",
        id_Producto: 0,
        id_Sucursal:"",
        fechaRegistroStock: "",
        cantidadStock: "",
        fechaRegistroStock: ""

    }

    // const [nombreCompleto, setNombreCompleto] = useState("")
    const [stock, setStock] = useState(initialState)
    const [products, setProducts] = useState([]);
    const [suc, setSuc] = useState([]);

    const getProducts = async () => {
        const response = await axios.get(`${URL_PRODUCTOS}`);
        console.log(response.data);
        setProducts(response.data);
      };
    
      const getSuc = async () => {
        const response = await axios.get(`${URL_SUCURSALES}`);
        console.log(response.data);
        setSuc(response.data);
      };
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try {
            
            const response = await axios.put(`${URL_STOCK_EDITAR}${id}`, {
                id_Producto: stock.id_Producto,
                id_Sucursal:stock.id_Sucursal,
                fechaRegistroStock: stock.fechaRegistroStock,
                cantidadStock: stock.cantidadStock,
                descripcionStock: stock.descripcionStock,
                activoStock: stock.activoStock,
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
            ...stock, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()  
        getProducts();
        getSuc();  }, [])

    return (


        <div>
            <h2 className="p-5 text-white text-center">EDITAR STOCK</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Tooltip title="Nombre del Producto">
                            <FormControl type='text' placeholder='Producto' value={stock.NombreProducto} onChange={handleChange} name="id_Producto" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Nombre Sucursal">
                            <FormControl type='text' placeholder='Sucursal' value={stock.nombreSucursal} onChange={handleChange} name="id_Sucursal" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Cantidad Stock">
                            <FormControl type='text' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                        </Tooltip>
                        <br />
                        <Tooltip title="Fecha Registro">
                            <FormControl type='text' placeholder='FechaRegistro' value={date} onChange={handleChange} name="fechaRegistroStock" />
                        </Tooltip>
                        <br />

                    </FormGroup>
                    <Button type='submit' className='btn btn-danger mx-2'>Actualizar Stock</Button>
                    <Link to={'/stocks'} className='btn text-white bg-danger '>Volver a Stock</Link>
                </Form>
            </div>
        </div>
    )
}

export default EditStock
