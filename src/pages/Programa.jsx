import {useState, useContext} from 'react';
import ModalSimple from '../components/modal/modalSimple';
import { ContextCounter } from '../context/Context';


const Programa = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({name: "", age: 0, cl: "#212121"});
  const [popup, setPopup] = useState(false);
  const [show, setShow] = useState(false);

  const {increment, counter} = useContext(ContextCounter);

  const updateName = () => {
    const userText = document.querySelector("#first_name").value,
      ageText = document.querySelector("#age").value;

    setUser({name: userText, age: ageText})
    
  }

  const handlePopup = () => {
    setPopup(!popup)
  }
  return (
    <>
      <div className="container mx-auto">
        <h4 className="text-2xl font-bold text-black">useState</h4>
        <p className="mb-3 text-gray-900">clicked {count} times</p>
        <button type="button" onClick={() => setCount(count + 1)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Click On Me!!</button>
        <div className="block mt-6">
          <p className="mb-3 text-gray-900">Name: {user.name}</p>
          <p className="mb-3 text-gray-900">Age: {user.age}</p>
          <p className="mb-3 text-gray-900"> {user.name} - {user.age} </p>


          <p className="text-3xl font-bold" style={{color: user.cl}}>Resultado:</p>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row space-x-4">
              <div className='w-1/2'>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" value={user.name} required onChange={(e) => {
                  setUser({...user, name: e.target.value, cl: "#F90"})
                  //setUser("#F90")
                }} />
                {/* setUser({...user, name: e.target.value})} */}
              </div>
              <div className='w-1/2'>
                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required value={user.age} onChange={(e) => {
                  setUser({...user, age: e.target.value, cl: "#F00"})
                  //setColor("#F00")
                }} />
              </div>
            </div>
            <div className='w-full flex justify-center'>
              <button onClick={updateName} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-2/6">Change name</button>
            </div>
          </div>
        </div>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handlePopup}>Open Popup</button>
        <div className='bg-slate-400 opacity-90 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center' style={{display: popup ? "flex": "none"}}>
          <div className='bg-black w-1/2 p-4'>
            <p className='text-white text-xl relative'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In tempore corporis numquam quibusdam, quam voluptates magni natus esse excepturi maxime voluptatum maiores culpa velit delectus optio illum, tempora, quisquam suscipit?
              <span className='text-2xl w-8 h-8 bg-white text-black font-bold rounded-full absolute -right-7 -top-7 flex items-center justify-center cursor-pointer' onClick={handlePopup}>
                X
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className='container mx-auto bg-slate-200'>
        <button className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setShow(true)}>
          Show Simple Modal
        </button>
        <ModalSimple show={show} setShow={setShow}>
          This is inside the modal!
        </ModalSimple>
        <div className="block mt-10">
          <h3 className="h3">useContext</h3>
          <h4 className="h4">Counter useContext: {counter}</h4>
          <button onClick={increment} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">increment</button>
        </div>
      </div>

    </>
  )
}

export default Programa