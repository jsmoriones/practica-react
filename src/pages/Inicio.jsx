import { useContext } from "react"
import { ContextCounter } from "../context/Context";
import LoginContext from "../context/LoginContext";

const Inicio = () => {

  const {reset, counter} = useContext(ContextCounter);
  const { user, login, logout, credentials, setCredentials } = useContext(LoginContext);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCredentials((prev) => ({...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = credentials;
    login(username, password);
  }

  return (
    <section className="text-gray-600 body-font">
      {
        user
          ? (
            <>
              <h2>Bienvenido, {user.username}</h2>
              <button onClick={logout}>Cerrar Cesion</button>
            </>
          ) : (
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
              <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                <h1 className="title-font font-medium text-3xl text-gray-900">Slow-carb next level shoindcgoitch ethical authentic, poko scenester</h1>
                <p className="leading-relaxed mt-4">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
              </div>
              <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                <div className="relative mb-4">
                  <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Username</label>
                  <input type="text" id="username" name="username" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => handleChange(e)} />
                </div>
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                  <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => handleChange(e)} />
                </div>
                <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>Button</button>
                <p className="text-xs text-gray-500 mt-3">Literally you probably havent heard of them jean shorts.</p>
              </div>
            </div>
          )
      }
      <div className="block mt-10">
        <h3 className="h3">useContext</h3>
        <h4 className="h4">Counter useContext: {counter}</h4>
        <button onClick={reset} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">reset</button>
      </div>
    </section>
  )
}

export default Inicio