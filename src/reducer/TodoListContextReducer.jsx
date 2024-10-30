import { useReducer } from "react";
import ReducerTodoList from "./ReducerTodoList";

const TodoListContextReducer = () => {
    const [state, dispatch] = useReducer(ReducerTodoList, {user: []});

    const agregarUsuario = (data) => {
        dispatch({
            type: "AGREGAR_USUARIO",
            payload: data
        })
    };
    const mostrarUsuarios = () => {
        return localStorage.getItem("usuarios");
    };
    const eliminarUsuario = (nombre) => {
        dispatch({
            type: "ELIMINAR_USUARIO",
            payload: nombre
        })
    };

    return {
        agregarUsuario,
        eliminarUsuario,
        mostrarUsuarios
    }
}

export default TodoListContextReducer;