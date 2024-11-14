import React, {useContext} from 'react'
import { useAuthLogin, AuthMemoContextLogin } from '../reducer/authReducer'
import LoginMemoCallbackProfile from '../components/LoginMemoCallbackProfile';

const LoginCallback = () => {
    const {user, logout} = useAuthLogin();
    //let loggedUser = JSON.parse( sessionStorage.getItem("user") );
  return (
    <div>
    {
        user ? (
            <>
                <h1>Bienvenido</h1>
                <p>Usuario {user.username}</p>
                <button onClick={logout}>Salir</button>
            </>
        ) : (
            <LoginMemoCallbackProfile />
        )
    }
    </div>
  )
}

export default LoginCallback