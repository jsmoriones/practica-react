const ComponentePadre = (props) => {
  return (
    <>
        <div className="bg-slate-600 p-5">
            {props.children}
        </div>
    </>
  )
}

export default ComponentePadre