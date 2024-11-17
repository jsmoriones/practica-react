import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticaionReducer } from "./authenticationReducer";
import { useRegisterProvider } from "./registerReducer";
import ModalSimple from "./components/Modal";

const SuccessAuthTemplated = ({funcNav}) => {
  const [show, setShow] = useState(false);
  const { email, logout, user, updateUser } = useAuthenticaionReducer();
  const {users} = useRegisterProvider()
  const navigate = useNavigate();

  useEffect(() => {
    funcNav(false)
    if( !email ){
      navigate('/taller-access');
    }
  }, []);

  const handleUpdateInfoUser = (e) => {
    e.preventDefault();
    const formData = new FormData(formUpdate);
    const objData = Object.fromEntries(formData);

    let error = "";
    if( Object.values(objData).includes("") ){
      error = "Todos los Campos son Obligatorios";
    }

    if(error.length){
      alert("Faltan datos")
      return error;
    }

    updateUser(objData);
  }

  return(
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={logout}>Cerrar Sesión
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <section className="h-full pt-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:space-x-3 space-y-3 lg:space-y-0">
          <aside className="p-2 rounded-lg bg-slate-200 w-full lg:w-3/12">
            <h2 className="text-2xl font-semibold mb-3">Tu Información</h2>
            <h3 className="text-xl font-semibold">Bienvenido, {user.fullname}</h3>
            <p className="text-gray-500 text-lg">Email: <span className="text-bold">{user.email}</span></p>
            <p className="text-gray-500 text-lg">Direccion: <span className="text-bold">{user.direccion}</span></p>
            <p className="text-gray-500 text-lg">Telefono: <span className="text-bold">{user.telefono}</span></p>
            <div className="flex w-full my-2">
              <button href="#" className="p-1 bg-green-400 rounded-lg hover:bg-green-600 transition" onClick={() => setShow(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                  <path strokeLinecap="round" strokeLinejoin="round" stroke="white" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
            </div>
          </aside>
          <section className="p-2 rounded-lg bg-slate-200 w-full lg:w-9/12">
                <div className="flex flex-wrap -m-2">
            {
              users.filter(u => u.email !== user.email).map((user, index) => (
                  <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/50x50" />
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font text-xl font-medium">{user.fullname}</h2>
                        <p className="text-gray-500">Email: {user.email}</p>
                        <p className="text-gray-500">Dir: {user.direccion}</p>
                        <p className="text-gray-500">Tel: {user.telefono}</p>
                      </div>
                    </div>
                  </div>
              ))
            }
                </div>
          </section>
        </div>
        <ModalSimple show={show} setShow={setShow} user={user} handleUpdateInfoUser={handleUpdateInfoUser} />
      </section>
    </>
  )
}

export default SuccessAuthTemplated