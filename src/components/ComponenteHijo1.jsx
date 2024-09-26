import ComponenteHijo2 from "./ComponenteHijo2"

const ComponenteHijo1 = () => {
  return (
    <>
        <p className="text-white text-2xl">Componente Hijo 1</p>
        <ComponenteHijo2 />
    </>
  )
}

export default ComponenteHijo1