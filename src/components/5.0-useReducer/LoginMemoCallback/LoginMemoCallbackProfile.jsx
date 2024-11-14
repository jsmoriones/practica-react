import { useContext } from 'react';
import { AuthMemoContextLogin, useAuthLogin } from '../reducer/authReducer'

const LoginMemoCallbackProfile = () => {
    const {login, credentials, setCredentials} = useContext(AuthMemoContextLogin);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} =  credentials;
        login(username, password)
    }
  return (
    <div className='max-w-lg mx-auto bg-gray-400 p-4 rounded-xl shadow'>
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col mb-5'>
                <label htmlFor="username" className='mb-1 text-lg'>Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className='p-2 rounded-md outline-none bg-slate-100'
                />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="password" className='mb-1 text-lg'>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className='p-2 rounded-md outline-none bg-slate-100'
                />
            </div>
            <input
                type="submit"
                value="enviar"
                className='px-3 py-2 text-md bg-slate-800 text-white uppercase font-bold mt-7 cursor-pointer'
            />
        </form>
    </div>
  )
}

export default LoginMemoCallbackProfile