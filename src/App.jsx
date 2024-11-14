import { useContext, useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

//import Inicio from "./pages/Inicio.jsx"
import Header from "./components/3.0-Tailblocks/Header"
//1.0
import Componentes from "./components/1.0-componentesYProps/Componentes"
//2.0
import Programa from './components/2.0-useState/Programa'
//3.0
import Tailblocks from './components/3.0-Tailblocks/Tailblocks'
//4.0
import LoginProvider from "./components/4.0-useContext/Inicio/LoginProvider"
import Institucion from './components/4.0-useContext/Institucion'
import ThemeComponent from "./context/ThemeContext2/ThemeComponent"
import { ThemeContext } from "./context/ThemeContext/ThemeContext";
import ReducerIncrement from "./components/5.0-useReducer/ReducerIncrement/ReducerIncrement"
import SlideTemplate from "./components/5.0-useReducer/ReducerSlide/SlideTemplate"
import TodoList from "./components/5.0-useReducer/TodoList/TodoList"

import SessionStorage from "./components/6.0-sessionStorage/SessionStorage"
import TemplatedAccess from "./components/Taller/AccessLoginAuth/TemplatedAccess"
import { RegisterProvider } from "./components/Taller/AccessLoginAuth/registerReducer"
import { AuthenticationProvider } from "./components/Taller/AccessLoginAuth/authenticationReducer"
import SuccessAuthTemplated from "./components/Taller/AccessLoginAuth/SuccessAuthTemplated"
/*import LoginMemoCallback from "./pages/LoginMemoCallback.jsx"*/

function App() {

  const [showNav, setShowNav] = useState(true);
  const {themeLight, isLightTheme} = useContext(ThemeContext)

  return (
    <>
      <div style={isLightTheme ? {backgroundColor: `${themeLight.light.bg}`} : {backgroundColor: `${themeLight.dark.bg}`} } className="min-h-screen">
        {
          showNav && <Header />
        }
        <Routes>
          <Route path='/' element={<LoginProvider />} />
          <Route path='/componentes' element={<Componentes />} />
          <Route path='/programa' element={<Programa />} />
          <Route path='/tailblock' element={<Tailblocks />} />
          <Route path='/institucion' element={<Institucion />} />
          <Route path='/themeContext' element={<ThemeComponent />} />
          <Route path='/ReducerIncrement' element={<ReducerIncrement />} />
          <Route path='/reducer-slide' element={<SlideTemplate />} />
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/session' element={<SessionStorage />} />
          {/*<Route path='/login2' element={<LoginMemoCallback />} />*/}
          <Route path='/taller-access' element={
            <RegisterProvider>
              <AuthenticationProvider>
                <TemplatedAccess funcNav={setShowNav} />
              </AuthenticationProvider>
            </RegisterProvider>
          } />
          <Route path="/success-auth" element={
            <RegisterProvider>
              <SuccessAuthTemplated funcNav={setShowNav} />
            </RegisterProvider>
          } />
          <Route path="*" element={<Navigate to="/" />} /> {/*Redirecciona al inicio en caso ingresar a una ruta inexistente*/}
        </Routes>
      </div>
    </>
  )
}

export default App
