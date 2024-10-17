import { useState, useEffect, useContext } from "react"
import { ContextCounter } from "../context/Context";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext.js";
const Institucion = () => {
  const [query, setQuery] = useState("");
  const [invocation, setInvocation] = useState(1);
  
  const {counter, decrement} = useContext(ContextCounter);

  const {themeLight, isLightTheme} = useContext(ThemeContext)

  useEffect(() => {
    //alert("Bienvenido a la aplicación!!!");
    console.log(document.title);
    document.title = "Periodicos Viejos " + query;
  }, [query]);

  return (
    <>
      <h2 className="text-4xl text-center font-bold mb-6">useEffect</h2>
      <div className="container mx-auto flex flex-col">
        <h1 className="text-2xl font-bold" style={isLightTheme ? {color: `${themeLight.light.syntax}`} : {color: `${themeLight.dark.syntax}`} }>Periodicos viejos que contienen</h1>
        <p style={isLightTheme ? {color: `${themeLight.light.syntax}`} : {color: `${themeLight.dark.syntax}`} }>{invocation} Invocations</p>
        <form className="flex flex-col items-start">
          <input
            type="text"
            id="periodico"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border border-1 border-slate-700 outline-none"
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setInvocation(val => val + 1);
            }}
          >
            Clicked Infications!!!
          </button>
        </form>
        <div className="block mt-10">
          <h3 className="h3" style={isLightTheme ? {color: `${themeLight.light.syntax}`} : {color: `${themeLight.dark.syntax}`} }>useContext</h3>
          <h4 className="h4" style={isLightTheme ? {color: `${themeLight.light.syntax}`} : {color: `${themeLight.dark.syntax}`} }>Counter useContext: {counter}</h4>
          <button onClick={decrement} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">decrement</button>
        </div>

        <AuthContext.Consumer>{(context) => {
          return (
            <div className="block mt-10">
              <p style={isLightTheme ? {color: `${themeLight.light.syntax}`} : {color: `${themeLight.dark.syntax}`} }>Estas Logueado: {context.isAuthenticated ? "Si, estas logueado" : "No, debes loguearte"}</p>
              <button onClick={context.toggleAuthentica} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Loguearme</button>
            </div>
          )
        }}</AuthContext.Consumer>

      </div>
    </>
  )
}

/*
<div className="block mt-10">
  <p>Estas Logueado: {isAuthenticated ? "Si, estas logueado" : "No, debes loguearte"}</p>
  <button onClick={toggleAuthentica} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Loguearme</button>
</div>

*/

export default Institucion