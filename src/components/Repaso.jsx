const Repaso = (props) => {
    const {programa, competencia} = props;
    return (
    <>
        <div className="bg-slate-300 inline-block p-3 px-6">
            <p className="text-2xl text-gray-900">Programa: {programa}</p>
            <p className="text-2xl text-gray-900">Competencia: {competencia}</p>
        </div>
    </>
    )
}

export default Repaso