import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO, URL_EMPLEADO_EDITAR } from '../../../../Constats/endpoints'

const EditEmployee = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_Sucursal: "",
        nombreEmpledo: "",
        apellidoEmpleado: "",
        cuilEmpleado: "",
        telefonoEmpleado: "",
        mailEmpleado: "",
        direccionEmpleado: ""
    }

    const [employee, setEmployee] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.put(`${URL_EMPLEADO_EDITAR}${id}`, {
                id_sucursal: employee.id_Sucursal,
                nombreCompleto: employee.nombreEmpleado,
                apellidoEmpleado: employee.apellidoEmpleado,
                cuil: employee.cuilEmpleado,
                telefono: employee.telefonoEmpleado,
                mail: employee.mailEmpleado,
                direccion: employee.direccionEmpleado
            })
            if (response.status === 200) {
                alert("Empleado Actualizado!")
                navigate('/empleados')
            }
        } catch (error) {
            console.log(error)
        }

    }

    const getData = async () => {
        const response = await axios.get(`${URL_EMPLEADO}/${id}`)
        console.log(response.data)
        setEmployee(response.data[0])


    }

    const handleChange = (e) => {
        setEmployee({
            ...employee, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (


        <div>
            <h2 className="p-5 text-white text-center">EDITAR EMPLEADO</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControl type='number' placeholder='Numero Sucursal' value={employee.id_Sucursal} onChange={handleChange} name="id_Sucursal" />
                        <br />
                        <FormControl type='text' placeholder='Nombre Completo' value={employee.nombreEmpleado} onChange={handleChange} name="nombreEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='Nombre Completo' value={employee.apellidoEmpleado} onChange={handleChange} name="apellidoEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='CUIL' value={employee.cuilEmpleado} onChange={handleChange} name="cuilEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='Telefono' value={employee.telefonoEmpleado} onChange={handleChange} name="telefonoEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='Mail' value={employee.mailEmpleado} onChange={handleChange} name="mailEmpleado" />
                        <br />
                        <FormControl type='text' placeholder='Direccion' value={employee.direccionEmpleado} onChange={handleChange} name="direccionEmpleado" />
                        <br />
                    </FormGroup>
                    <Button type='submit'>Actualizar Empleado</Button>
                </Form>
            </div>
        </div>
    )
}

export default EditEmployee
