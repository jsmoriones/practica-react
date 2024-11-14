const SessionStorage = () => {

    const crear = () => {
        /*localStorage.setItem("usuario", "marko");
        localStorage.setItem("email", "marko@email.com");*/
        document.cookie = "usuario=marko; expires=Thu, 31 Oct 2024 9:21:00 UTC; path=/"
    }

    const mostrar = () => {
        /*alert(localStorage.getItem("usuario"));
        alert(localStorage.getItem("email"));*/
        alert(document.cookie);
    }

    const modificar = () => {
        /*localStorage.setItem("usuario", "marko123");
        localStorage.setItem("email", "marko2@email.com");*/
        document.cookie = "usuario=marko; expires=Thu, 31 Oct 2024 9:21:00 UTC; path=/"
    }

    const eliminar = () => {
        /*localStorage.removeItem("usuario");
        localStorage.removeItem("email");*/
        document.cookie = "usuario=marko; expires=Thu, 31 Oct 2024 9:21:00 UTC; path=/"
    }
  return (
    <>
        <div className="max-w-3xl mx-auto mt-10">
            <div className="flex space-x-4 justify-center">
                <button className="block text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-800" type="button" onClick={crear}>
                    Crear
                </button>
                <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={mostrar}>
                    Mostrar
                </button>
                <button className="block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" type="button" onClick={modificar}>
                    Modificar
                </button>
                <button className="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button" onClick={eliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    </>
  )
}

export default SessionStorage