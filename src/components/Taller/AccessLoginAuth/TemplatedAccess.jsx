import React, { memo, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRegisterProvider } from "./registerReducer";
import { useAuthenticaionReducer } from "./authenticationReducer";


const TemplatedAccess = ({funcNav}) => {
  const [showRegister, setShowRegister] = useState(false);
  const { addUser } = useRegisterProvider();
  const { login, credentials, setCredentials, email } = useAuthenticaionReducer();

  const navigate = useNavigate();

  useEffect(() => { //Este useEffect es oficial para negar el header
    funcNav(false)
  }, []);

  useEffect(() => {
    if( email ){
      navigate('/success-auth')
    }
  }, []);

  const handleRegisterUser = () => {
    const formData = new FormData(formRegister);
    const objData = Object.fromEntries(formData);

    let error = "";
    if( Object.values(objData).includes("") ){
      error = "Todos los Campos son Obligatorios";
    }

    if(error.length){
      alert("Faltan datos")
      return error;
    }
    
    addUser(objData);
    alert("Registrado")
    formRegister.reset()
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({...credentials, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = credentials;
    login(email, password);
  }

  const Templated1 = memo(() => {
    return (
      <div className="bg-white p-5 mx-auto rounded-xl shadow-sm max-w-md">
        <h2 className="text-2xl text-gray-800 text-center font-bold">Registrate</h2>

        <form className="mt-8 space-y-4" id="formRegister">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Nombre Completo</label>
            <div className="relative flex items-center">
              <input name="fullname" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa tu Nombre completo" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Direccion</label>
            <div className="relative flex items-center">
              <input name="direccion" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa tu direccion" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Telefono</label>
            <div className="relative flex items-center">
              <input name="telefono" type="number" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa tu Telefono" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Correo Electronico</label>
            <div className="relative flex items-center">
              <input name="email" type="email" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa tu correo" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block">Contraseña</label>
            <div className="relative flex items-center">
              <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa la contraseña" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div className="!mt-8">
            <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none" onClick={handleRegisterUser}>
              Registrarme
            </button>
          </div>
          <p className="text-gray-800 text-sm !mt-8 text-center">¿Ya tienes una cuenta? <Link onClick={() => setShowRegister(false)} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Inicia sesión aquí</Link></p>
        </form>
      </div>
    )
  });

  return(
    <div className="bg-gray-50 min-h-screen h-full pt-10 font-[sans-serif]">
      {
        showRegister ? (
          <Templated1 />
        ) : (
          <div className="bg-white p-5 mx-auto rounded-xl shadow-sm max-w-md">
            <h2 className="text-2xl text-gray-800 text-center font-bold">Iniciar Sesion</h2>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Correo Electronico</label>
                <div className="relative flex items-center">
                  <input name="email" type="email" className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa tu correo" value={credentials.email} onChange={handleChange} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                    <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-sm mb-2 block">Contraseña</label>
                <div className="relative flex items-center">
                  <input name="password" type="password" className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Ingresa tu contraseña" value={credentials.password} onChange={handleChange} />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                  </svg>
                </div>
              </div>

              <div className="!mt-8">
                <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Iniciar Sesion
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">¿No tienes una cuenta? <Link onClick={() => setShowRegister(true)} className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold">Regístrate aquí</Link></p>
            </form>
          </div>
        )
      }
    </div>
  )
}

export default TemplatedAccess