import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
<<<<<<< HEAD
import { URL_STOCK,URL_STOCK_EDITAR, URL_SUCURSALES,URL_PRODUCTOS  } from '../../../../Constats/endpoints'
=======
import { URL_STOCK, URL_STOCK_EDITAR } from '../../../../Constats/endpoints'
import { Tooltip } from '@mui/material';

>>>>>>> main

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
<<<<<<< HEAD
        descripcionStock: "",
        activoStock: 0,
=======
        fechaRegistroStock: ""

>>>>>>> main
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
<<<<<<< HEAD
                descripcionStock: stock.descripcionStock,
                activoStock: stock.activoStock,
            })
        
            if(response.status === 200) {
=======
                fechaRegistroStock: date,

            })
            if (response.status === 200) {
>>>>>>> main
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
<<<<<<< HEAD
       
=======
        const date = new Date(response.data[0].fechaRegistroStock).toJSON().slice(0, 10)
        setDate(date)


>>>>>>> main
    }

    const handleChange = (e) => {
        setStock({
            ...stock, [e.target.name]: e.target.value
        })
<<<<<<< HEAD
=======
        setDate({
            ...date, [e.target.name]: e.target.value
        })
>>>>>>> main
    }

    useEffect(() => {
        getData()  
        getProducts();
        getSuc();  }, [])

    return (


<<<<<<< HEAD
    <div>
      <h2 className="p-5 text-white text-center">EDITAR STOCK</h2>
      <br />
      <div className='d-flex justify-content-center p-5'>
        <br />
        <Form onSubmit={handleSubmit}>


    
            <br />
            <Form.Control as="select" onChange={handleChange} name="id_Producto">
              {
                products.map((product) => (
                  <option key={product.id_Producto} name="id_Producto" value={product.id_Producto}>{product.nombreProducto} </option>
                ))
              }
            </Form.Control>
            <br />
            <Form.Control as="select" name="id_Sucursal" onChange={handleChange}>
              {
                suc.map((sucu) => (
                  <option key={sucu.id_Sucursal} name="id_Sucursal" value={sucu.id_Sucursal}>{sucu.nombreSucursal} </option>
                ))
              }
            </Form.Control>
            <br />

            <FormGroup>
                <FormControl type='number' placeholder='Producto' value={stock.id_Producto} onChange={handleChange} name="id_Producto"  /> 
                <br />
                <FormControl type='number' placeholder='Sucursal' value={stock.id_Sucursal} onChange={handleChange} name="id_Sucursal"  /> 
                <br />
                <FormControl type='text' placeholder='Cantidad Stock' value={stock.cantidadStock} onChange={handleChange} name="cantidadStock" />
                <br />
                <FormControl type='text' placeholder='FechaRegistro' value={stock.fechaRegistroStock} name ="fechaRegistroStock"/>
                <br />
                <FormControl type='text' placeholder='Descripcion' value={stock.descripcionStock} onChange={handleChange} name="descripcionStock" />
                <br />
            </FormGroup>
            <Button type='submit'>Actualizar Stock</Button>
        </Form>
</div>
    </div>
  )
=======
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
>>>>>>> main
}

export default EditStock
