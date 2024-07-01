import { useState, useEffect } from 'react'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { URL_EMPLEADO, URL_EMPLEADO_EDITAR } from '../../../../Constats/endpoints'

const EditEmployee = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const initialState = {
        id_sucursal: "",
        nombreCompleto: "",
        cuil: "",
        telefono: "",
        mail: "",
        direccion: ""
    }

    const [employee, setEmployee] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(employee.nombreCompleto, employee.cuil, employee.telefono, employee.mail, employee.direccion);
            let response = await axios.put(`${URL_EMPLEADO_EDITAR}${id}`, {
                id_sucursal: employee.id_sucursal,
                nombreCompleto: employee.nombreCompleto,
                cuil: employee.cuil,
                telefono: employee.telefono,
                mail: employee.mail,
                direccion: employee.direccion
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
            <h2 className="p-5 text-white text-center">EDITAR CLIENTE</h2>
            <br />
            <div className='d-flex justify-content-center p-5'>
                <br />
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormControl type='number' placeholder='Numero Sucursal' value={employee.id_sucursal} onChange={handleChange} name="id_sucursal" />
                        <br />
                        <FormControl type='text' placeholder='Nombre Completo' value={employee.nombreCompleto} onChange={handleChange} name="nombreCompleto" />
                        <br />
                        <FormControl type='text' placeholder='CUIL' value={employee.cuil} onChange={handleChange} name="cuil" />
                        <br />
                        <FormControl type='text' placeholder='Telefono' value={employee.telefono} onChange={handleChange} name="telefono" />
                        <br />
                        <FormControl type='text' placeholder='Mail' value={employee.mail} onChange={handleChange} name="mail" />
                        <br />
                        <FormControl type='text' placeholder='Direccion' value={employee.direccion} onChange={handleChange} name="direccion" />
                        <br />
                    </FormGroup>
                    <Button type='submit'>Actualizar Empleado</Button>
                </Form>
            </div>
        </div>
    )
}

export default EditEmployee
