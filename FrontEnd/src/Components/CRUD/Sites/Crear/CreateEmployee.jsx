import { useEffect, useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  URL_EMPLEADO_CREAR,
  URL_SUCURSALES,
} from "../../../../Constats/endpoints";
import { Tooltip } from "@mui/material";

const CreateEmployee = () => {
  const navigate = useNavigate();

  const initialState = {
    id_Sucursal: null,
    nombreEmpleado: "",
    apellidoEmpleado: "",
    cuilEmpleado: "",
    telefonoEmpleado: "",
    mailEmpleado: "",
    direccionEmpleado: "",
    activoEmpleado: 0,
  };

  // const [nombreCompleto, setNombreCompleto] = useState("")
  const [employee, setEmployee] = useState(initialState);
  const [local, setLocal] = useState([]);

  const getLocal = async () => {
    const response = await axios.get(URL_SUCURSALES);
    setLocal(response.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL_EMPLEADO_CREAR}`, {
        id_Sucursal: employee.id_Sucursal,
        nombreEmpleado: employee.nombreEmpleado,
        apellidoEmpleado: employee.apellidoEmpleado,
        cuilEmpleado: employee.cuilEmpleado,
        telefonoEmpleado: employee.telefonoEmpleado,
        mailEmpleado: employee.mailEmpleado,
        direccionEmpleado: employee.direccionEmpleado,
      });

      if (response.status === 200) {
        alert("Empleado Creado!");
        navigate("/empleados");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getLocal();
  }, []);

  return (
    <div>
      <br />
      <div className='container-CRUD'>
      <br />
        <Form className='formCRUD' onSubmit={handleSubmit}>
        <p className="titleCRUD">CREAR UN EMPLEADO</p>
          <FormGroup>
            <Tooltip title="Numero Sucursal">
              <FormControl
                as="select"
                className="crud input"
                onChange={handleChange}
                name="id_Sucursal"
                required
              >
            <option hidden>Selecciona la Sucursal</option>
              {local.map((sucursal) => (
                <option
                  key={sucursal.id_Sucursal}
                  name="id_Sucursal"
                  value={sucursal.id_Sucursal}
                >
                  {sucursal.nombreSucursal}
                </option>
              ))}


              </FormControl>
            </Tooltip>
            <br />
            <Tooltip title="Nombre del Cliente">
              <FormControl
                type="text"
                placeholder="Nombre Empleado"
                className="crud input"
                onChange={handleChange}
                name="nombreEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Nombre del Cliente">
              <FormControl
                type="text"
                placeholder="Apellido Empleado"
                className="crud input"
                onChange={handleChange}
                name="apellidoEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="CUIL Empleado">
              <FormControl
                type="number"
                placeholder="CUIL"
                className="crud input"
                onChange={handleChange}
                name="cuilEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Telefono Empleado">
              <FormControl
                type="number"
                placeholder="TELEFONO"
                className="crud input"
                onChange={handleChange}
                name="telefonoEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="MAIL Empleado">
              <FormControl
                type="email"
                placeholder="MAIL"
                className="crud input"
                onChange={handleChange}
                name="mailEmpleado"
                required
              />
            </Tooltip>
            <br />
            <Tooltip title="Direccion Empleado">
              <FormControl
                type="text"
                placeholder="DIRECCION"
                className="crud input"
                onChange={handleChange}
                name="direccionEmpleado"
                required
              />
            </Tooltip>
            <br />
          </FormGroup>
          <div>
          <Button type="submit" className="btnCRUD">
            Crear Empleado
          </Button>
          </div>
          <div>
          <button className="btnBack"><Link to={'/empleados'} className='text-decoration-none text-white'>Volver a Empleados</Link></button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateEmployee;
