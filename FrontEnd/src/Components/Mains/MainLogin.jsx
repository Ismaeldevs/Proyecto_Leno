import { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../../CSS/Mains/Login.css'

const MainLogin = ({onRolesUpdate}) => {

  const [usuario, setUsuario] = useState([]);
  const [datos,setDatos] = useState("")

  let manager = false
  let empleado = false


  const navigate = useNavigate()
  
  const getData = async () => {
    const response = await axios.get('http://localhost:8000/usuarios')
    console.log(response.data)
    setUsuario(response.data)
    
  }

  const verifyData = (e) => {
    setDatos({
      ...datos, [e.target.name] : e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    usuario.forEach((user) => {

      console.log(user)
      
      if(datos.usuario === user.usuario && datos.clave === user.clave && 1 === user.rol) {
        manager = true
        
      }
      if(datos.usuario === user.usuario && datos.clave === user.clave && 0 === user.rol) {
        empleado = true
        
      }
    })
    onRolesUpdate(manager, empleado);
    if(manager === true) {
      navigate('/select')
    } else if (empleado === true) {
      navigate('/home') // ← tiene que ir a ventas
    } else {
      alert("datos incorrectos!")
    }
}

  // console.log(usuario)

  useEffect(() => {
    getData()
  }, [])

  return (
<div className="form-ui">
    <form action="" method="post" className="form">
      <div className="form-body">
        <div className="welcome-lines">
          <div className="welcome-line-1">Leno Argentina</div>
          <div className="welcome-line-2">Ingresa tus datos</div>
        </div>
        <div className="input-area">
          <div className="form-inp">
            <input placeholder="Usuario" name='usuario' type="text" onChange={verifyData} />
          </div>
          <div className="form-inp">
            <input placeholder="Contraseña" name='clave' type="password" onChange={verifyData} />
          </div>
        </div>
        <div className="submit-button-cvr">
          <button className="submit-button" type="submit" onClick={handleSubmit}>Ingresar</button>
        </div>
        <div className="forgot-pass">
          <a href="#">Olvidaste tu contraseña?</a>
        </div>
        <div className="bar"></div>
      </div>
    </form>
    </div>
  )
}

export default MainLogin
