import { useState } from "react";
import LoginContext from "./LoginContext";
import Inicio from "../pages/Inicio";

const LoginProvider = () => {
    const [user, setUser] = useState(null);
    const [credentials, setCredentials] = useState({username: "", password: ""});

    const login = (username, password) => {
        if(username === "rider" && password === "rider"){
            setUser({username});
            alert("Logueado")
        }else{
            alert("Credenciales Incorrectas")
        }
    }

    const logout = () => {
        setUser(null);
    }

  return (
    <LoginContext.Provider
        value={{
            user,
            login,
            logout,
            credentials,
            setCredentials
        }}
    >
        <Inicio />
    </LoginContext.Provider>
  )
}

export default LoginProvider