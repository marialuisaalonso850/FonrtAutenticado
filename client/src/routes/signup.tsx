import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import { API_URL } from "../Autenticacion/constanst";
import { useAuth } from "../Autenticacion/AutProvider";
import Footer from "../components/Footer";
import Swal from 'sweetalert2';

export default function Signup() {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [gmail, setGmail] = useState("");
  const [gmailError, setGmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const auth = useAuth();

  const goto = useNavigate();

  function validateUsername(value: string) {
    const regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(value)) {
      return "El nombre de usuario solo puede contener letras y números";
    }
    return "";
  }

  function validateGmail(value: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return "Por favor, ingrese una dirección de correo electrónico válida";
    }
    return "";
  }

  function validatePassword(value: any[] | React.SetStateAction<string>) {
    if (value.length < 8) {
      return "La contraseña debe tener al menos 6 caracteres";
    }
    return "";
  }

  async function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const usernameError = validateUsername(username);
    const gmailError = validateGmail(gmail);
    const passwordError = validatePassword(password);

    if (usernameError || gmailError || passwordError) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: usernameError || gmailError || passwordError
      });
    } else {
      try {
        const response = await fetch(`${API_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            gmail,
            password,
            role 
          })
        });

        const json = await response.json();
        if (response.ok) {
          console.log("Rol del usuario:", role);
          console.log("El usuario se creó correctamente");
          setErrorResponse("");
          goto("/Login"); // Redirigir al usuario a la página de inicio de sesión después de registrarse
          Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso',
            text: 'El usuario se ha creado correctamente.'
          });
        } else {
          console.log(role);
          console.log("Algo malo ocurrió :o");
          setErrorResponse(json.error || "Ocurrió un error al crear el usuario.");
        }
      } catch (error) {
        console.error("Error al enviar la solicitud:", error);
        setErrorResponse("Ocurrió un error al enviar la solicitud.");
      }
    }
  }

  function handleChangeUsername(value: string) {
    setUsername(value);
    setUsernameError(validateUsername(value));
  }

  function handleChangeGmail(value: string) {
    setGmail(value);
    setGmailError(validateGmail(value,));
  }

  function handleChangePassword(value: React.SetStateAction<string>) {
    setPassword(value);
    setPasswordError(validatePassword(value));
  }
  
  if (auth.esAutentico) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <DefaultLayout>
      <div className="form-box">
        <div className="wrapper">
          <div className="Sright">
            <div className="form-area">
              <form className="formSignup" onSubmit={handleSubmit}>
                <div className="formTitle">
                  <h2 className="form-title">Registro</h2>
                </div>
                {!!errorResponse && <div className="errorMessage">{errorResponse}</div>}
                <div className="inputs">
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="log-input">
                    <option>Seleccionar Rol...</option>
                    <option value="usuario">Usuario</option>
                    <option value="cliente">Cliente</option>
                  </select>
                  <input type="text" value={username} onChange={(e) => handleChangeUsername(e.target.value)} className="log-input" placeholder="Nombre"></input>
                  {usernameError && <p className="error">{usernameError}</p>}
                  <input type="email" value={gmail} onChange={(e) => handleChangeGmail(e.target.value)} className="log-input" placeholder="Email"></input>
                  {gmailError && <p className="error">{gmailError}</p>}
                  <input type="password" value={password} onChange={(e) => handleChangePassword(e.target.value)} className="log-input" placeholder="Contraseña"></input>
                  {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <button className="crear">Crear Usuario</button>
              </form>
            </div>
          </div>
          <div className="left">
            <div className="registration-info">
              <div className="title-regis">
                <h1>Bienvenido a <span className="span">ParkingLocation</span></h1>
              </div>
              <div className="regisP">
                <p className="registration-info-paragraph">Regístrate para acceder a nuestra plataforma y disfrutar de servicios de estacionamiento convenientes y seguros.</p>
              </div>
              <div className="regisLink">
                <p className="login-link">¿Ya tienes una cuenta? <a href="/Login">Iniciar sesión aquí</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className='air air1'></div>
        <div className='air air2'></div>
        <div className='air air3'></div>
        <div className='air air4'></div>
      </div>
      <section className="footer">
        <Footer />
      </section>
    </DefaultLayout>
  );
}



}
