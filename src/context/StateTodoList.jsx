import TodoListContext from "./TodoListContext";
import TodoListReducer from "../reducer/TodoListReducer"

const StateTodoList = ({children}) => {
    const { agregarUsuario, mostrarUsuarios, eliminarUsuario } = TodoListReducer();
  return (
    <TodoListContext.Provider
        value={{
            agregarUsuario,
            mostrarUsuarios,
            eliminarUsuario
        }}
    >
        {children}
    </TodoListContext.Provider>
  )
}

export default StateTodoList