import {NavLink} from "react-router-dom"

const Header = () => {

    const styleLinkNav = "mr-5 hover:text-gray-900 hover:text-black"
    const estaActivo = "mr-5 text-gray-900 font-bold"

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
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>
    </header>
  )
}

export default Header
