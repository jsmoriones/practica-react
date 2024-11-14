const repeatStyles = {
    linkMenu: "text-white text-xl hover:underline"
}

const HeaderApp = () => {
  return (
    <nav className="bg-stone-600 p-5">
        <ul className='flex justify-center gap-5'>
            <li><a href="/" className={repeatStyles.linkMenu}>Home</a></li>
            <li><a href="/componentes" className={repeatStyles.linkMenu}>Componentes</a></li>
            <li><a href="/tailblock" className={repeatStyles.linkMenu}>Tailblock</a></li>
            <li><a href="/programa" className={repeatStyles.linkMenu}>Programa</a></li>
            <li><a href="/institucion" className={repeatStyles.linkMenu}>Institucion</a></li>
        </ul>
    </nav>
  )
}

export default HeaderApp