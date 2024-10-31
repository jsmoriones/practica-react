import { useContext } from "react";
import {NavLink} from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext.js";

const Header = () => {

    const styleLinkNav = "mr-5 hover:text-gray-900 hover:text-black"
    const estaActivo = "mr-5 text-gray-900 font-bold"

    const {toggleTheme} = useContext(ThemeContext);

  return (
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Tailblocks</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <NavLink to="/" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>Inicio</NavLink>
                <NavLink to="/componentes" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>Componentes</NavLink>
                <NavLink to="/tailblock" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>TailBlock</NavLink>
                <NavLink to="/programa" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>Programa</NavLink>
                <NavLink to="/institucion"
                    className={({isActive}) =>
                        isActive
                            ? estaActivo
                            : styleLinkNav}>
                    Inistitucion
                </NavLink>
                <NavLink to="/themeContext" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>ThemeContext</NavLink>
                <NavLink to="/reducer" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>Reducer</NavLink>
                <NavLink to="/reducer-slide" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>Reducer Slide</NavLink>
                <NavLink to="/todolist" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>Todolist</NavLink>
                <NavLink to="/session" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>SessionStorage</NavLink>
                <NavLink to="/login2" className={({isActive}) => isActive ? estaActivo : styleLinkNav}>LoginCallbackMemo</NavLink>
            </nav>
            <div className="flex space-x-4 items-center">
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                <button className="w-5 h-5" onClick={toggleTheme}>
                    <svg className="text-3xl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="#4e4e4e">
                        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/>
                    </svg>
                </button>
            </div>
            
        </div>
    </header>
  )
}

export default Header
