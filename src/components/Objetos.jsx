const Objetos = () => {
  const objProps = {
    nombre: "Rider",
    cedula: 54543
  }

  const { nombre, cedula } = objProps;

  return (
    <button className="bg-yellow-500 px-5 py-2 text-white rounded-lg">{nombre} {cedula}</button>
  )
}

export default Objetos