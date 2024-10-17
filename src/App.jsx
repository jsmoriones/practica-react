import { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Inicio from "./pages/Inicio.jsx"
import Tailblocks from './pages/Tailblocks.jsx'
import Programa from './pages/Programa.jsx'
import Institucion from './pages/Institucion.jsx'
import Componentes from "./components/Componentes.jsx"
import Header from "./components/Header.jsx"
import { ThemeContext } from "./context/ThemeContext.js";

function App() {

  const {themeLight, isLightTheme} = useContext(ThemeContext)

  return (
    <>
      <div style={isLightTheme ? {backgroundColor: `${themeLight.light.bg}`} : {backgroundColor: `${themeLight.dark.bg}`} }>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/componentes' element={<Componentes />} />
          <Route path='/tailblock' element={<Tailblocks />} />
          <Route path='/programa' element={<Programa />} />
          <Route path='/institucion' element={<Institucion />} />
          <Route path="*" element={<Navigate to="/" />} /> {/*Redirecciona al inicio en caso ingresar a una ruta inexistente*/}
        </Routes>
      </div>
    </>
  )
}

export default App
