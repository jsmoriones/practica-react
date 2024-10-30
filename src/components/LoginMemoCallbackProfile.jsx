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
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="password">password:</label>
            <input
                type="text"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
        </div>
        <input
            type="submit"
            value="enviar"
        />
    </form>
  )
}

export default LoginMemoCallbackProfile