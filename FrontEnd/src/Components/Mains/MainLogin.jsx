import { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../../CSS/Mains/Login.css'

const MainLogin = () => {

  const [usuario, setUsuario] = useState([]);
  const [datos,setDatos] = useState("")
  // const [clave, setClave] = useState([]);
  // const [rol, setRol] = useState([]);

  const navigate = useNavigate()
  
  const getData = async () => {
    const response = await axios.get('http://localhost:8000/usuarios')
    setUsuario(response.data)
    
  }

  const verifyData = (e) => {
    setDatos({
      ...datos, [e.target.name] : e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(`enviando datos... ${datos.usuario}`)

   console.log(usuario[0].usuario)

   let bandera = false

   for (let i = 0; i < usuario.length; i++) {
    
    console.log(usuario[i].usuario)
    
    if(usuario[i].usuario === datos.usuario) {
      
      bandera = true
    } 
    
  }
  if(bandera === true) {
   navigate('/select')
   
  } else {
   alert("datos no correctos!")
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
            <input placeholder="Contraseña" type="password" />
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
