import Button from "./Button";
import Compoenente2 from "./Compoenente2";
import ComponenteHijo1 from "./ComponenteHijo1";
import ComponentePadre from "./ComponentePadre";

import Objetos from "./Objetos";
import Props from "./Props"
import Repaso from "./Repaso";

const Componentes = () => {
  return (
    <>
        <Button />
        <Objetos />
        <Compoenente2 />

        <ComponentePadre>
        <div className="flex flex-col items-start">
            <button className="bg-green-400 p-1 px-4 text-xl text-white inline-block">Boton 1</button>
            <button className="bg-green-500 p-1 px-4 text-xl text-white inline-block mt-2">Boton 2</button>
        </div>
        <ComponenteHijo1 />
        </ComponentePadre>
        <button className="rounded-full px-4 py-2 bg-regal-blue text-white text-lg font-bold">Save Changes</button>
        <h2 className="text-primary text-2xl font-bold">Ejemplo 1</h2>
        <h3 className="text-secondary text-2xl font-bold">Ejemplo 2</h3>
        <Props name="Rider" cedula="11111111" />
        <Repaso programa="ADSO" competencia="FrontEnd" />
    </>
  )
}

export default Componentes