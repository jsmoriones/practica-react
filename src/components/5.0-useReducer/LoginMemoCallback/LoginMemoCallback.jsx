import {memo} from "react";
import { AuthLoginMemoProvider } from "../reducer/authReducer";
import Login2 from "./Login2";


const LoginMemoCallback = memo(() => {
    return (
      <AuthLoginMemoProvider>
        <h1>Aplicacion de autenticacion</h1>
        <Login2 />
      </AuthLoginMemoProvider>
    )
})

export default LoginMemoCallback