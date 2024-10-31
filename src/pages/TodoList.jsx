import { useContext, useEffect, useState } from "react";
import TodoListContext from "../context/TodoListContext";

const TodoList = () => {
  const { agregarUsuario, mostrarUsuarios, eliminarUsuario } = useContext(TodoListContext);
  //const [users, setUsers] = useState([]);
  const [a, setA] = useState(false);

  useEffect(() => {
    console.log( mostrarUsuarios() )
  }, [a])

  const enviar = (e) => {
    e.preventDefault();
    let nombre = e.target.elements["nombre"].value,
      apellido = e.target.elements["apellido"].value,
      edad = e.target.elements["edad"].value,
      telefono = e.target.elements["telefono"].value,
      email = e.target.elements["email"].value;

    const usuario = {
      nombre,
      apellido,
      edad,
      telefono,
      email
    }

    agregarUsuario(usuario);
    setA(!a);

    //form.clear();
  }
  

  return (
        <div className="max-w-3xl mx-auto mt-7">
            <h2 className="text-3xl text-center text-slate-800 font-bold uppercase">TodoList Reducer</h2>
            <div className="bg-slate-200 p-3 rounded-lg">
              <form action="#" id="form" onSubmit={enviar}>
                <div className="mb-4">
                  <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Tu Nombre</label>
                  <input type="text" id="nombre" name="nombre" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="apellido" className="leading-7 text-sm text-gray-600">Tu Apellido</label>
                  <input type="text" id="apellido" name="apellido" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="edad" className="leading-7 text-sm text-gray-600">Tu Edad</label>
                  <input type="number" id="edad" name="edad" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="telefono" className="leading-7 text-sm text-gray-600">Tu Telefono</label>
                  <input type="tel" id="telefono" name="telefono" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Tu email</label>
                  <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>

                <div>
                  <input type="submit" value="Enviar" className="block text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800 cursor-pointer" />
                </div>
              </form>

              <div className="mt-10">
                {
                  mostrarUsuarios().length == 0 ? (<p>No Hay Resultados que mostrar</p>) :
                    mostrarUsuarios().map((usuario, index) => (
                      <>
                        <div className="bg-stone-400 p-2 rounded-lg mb-5" key={usuario.email}>
                          <p className="text-xl font-semibold">Nombre: <span className="font-normal">{usuario.nombre}</span></p>
                          <p className="text-xl font-semibold">Apellido: <span className="font-normal">{usuario.apellido}</span></p>
                          <p className="text-xl font-semibold">Edad: <span className="font-normal">{usuario.edad}</span></p>
                          <p className="text-xl font-semibold">Telefono: <span className="font-normal">{usuario.telefono}</span></p>
                          <p className="text-xl font-semibold">Email: <span className="font-normal">{usuario.email}</span></p>
                          <div className="flex flex-col space-y-2 mt-5">
                            <button className="block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" type="button">
                                Modificar
                            </button>
                            <button className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button" onClick={() => eliminarUsuario(usuario.nombre)}>
                                Eliminar
                            </button>
                          </div>
                        </div>
                      </>
                    ))
                  }
              </div>

            </div>
        </div>
  )
}
export default TodoList
    /*<>
      <TodoListContext.Consumer>{(context) => {
        return(
          <div className="max-w-3xl mx-auto mt-7">
              <h2 className="text-3xl text-center text-slate-800 font-bold uppercase">TodoList Reducer</h2>
              <div className="bg-slate-200 p-3 rounded-lg">
                <form action="#" id="form" onSubmit={(e) => context.agregarUsuario(enviar(e))}>
                  <div className="mb-4">
                    <label htmlFor="nombre" className="leading-7 text-sm text-gray-600">Tu Nombre</label>
                    <input type="text" id="nombre" name="nombre" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="apellido" className="leading-7 text-sm text-gray-600">Tu Apellido</label>
                    <input type="text" id="apellido" name="apellido" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="edad" className="leading-7 text-sm text-gray-600">Tu Edad</label>
                    <input type="number" id="edad" name="edad" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="telefono" className="leading-7 text-sm text-gray-600">Tu Telefono</label>
                    <input type="tel" id="telefono" name="telefono" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Tu email</label>
                    <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>

                  <div>
                    <input type="submit" value="Enviar" className="block text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800 cursor-pointer" />
                  </div>
                </form>

                <div className="mt-10">

                    users.length == 0 ? (<p>No Hay Resultados que mostrar</p>) :
                      usuarios.map((usuario, index) => (
                        <>
                          <div className="bg-stone-400 p-2 rounded-lg mb-5" key={usuario.email}>
                            <p className="text-xl font-semibold">Nombre: <span className="font-normal">{usuario.nombre}</span></p>
                            <p className="text-xl font-semibold">Apellido: <span className="font-normal">{usuario.apellido}</span></p>
                            <p className="text-xl font-semibold">Edad: <span className="font-normal">{usuario.edad}</span></p>
                            <p className="text-xl font-semibold">Telefono: <span className="font-normal">{usuario.telefono}</span></p>
                            <p className="text-xl font-semibold">Email: <span className="font-normal">{usuario.email}</span></p>
                            <div className="flex flex-col space-y-2 mt-5">
                              <button className="block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" type="button">
                                  Modificar
                              </button>
                              <button className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button" onClick={() => eliminarUsuario(usuario.nombre)}>
                                  Eliminar
                              </button>
                            </div>
                          </div>
                        </>
                      ))
                </div>

              </div>
          </div>
        )
      }}</TodoListContext.Consumer>
    </>*/
