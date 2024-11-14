import { useReducer } from "react";
import ActionTodoList from "./ActionTodoList";

const TodoListReducer = () => {
    const [state, dispatch] = useReducer(ActionTodoList, {user: []});

    const agregarUsuario = (data) => {
        dispatch({
            type: "AGREGAR_USUARIO",
            payload: data
        })
    };
    const mostrarUsuarios = () => {
        return state.user
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

export default TodoListReducer;