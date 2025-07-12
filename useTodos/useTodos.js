import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

//El init es esl tercer argumento de mi useReducer y es una funcion inicicializadora(initializerArg)
//La voy a usar para persisitir los datos después de recargar el navegador
//Aquí le indico que cuando monte el componente:
//intente tomar el item con el nombre 'todos' almacenado en el localStorage y lo pase
//a un objeto. Si el 'todos' no existe entonces devuelve un array vacío
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  //Necesito disparar un efecto cada vez que se actualicen los 'todos' para ir almacenando en el
  //LocalStorage cada nuevo ToDo insertado, y para eso voy a utilizar useEffect
  useEffect(() => {
    //El localStorage solo almacena pares clave-valor de tipo string, por eso tengo que pasar mis objetos
    // todos a strings
    localStorage.setItem("todos", JSON.stringify(todos));

    // como dependencia utilizo los todos para que cada vez que cambie la lista de todos, se lance el efecto
  }, [todos]);

  //ACCIONES para el Reducer
  const handleNewTodo = (todo) => {
    // console.log({ todo });
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  //Este referncia para el delete debo pasarla al TodoList y de alli al TodoItem que es el que tiene el botón de borrar
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  //Contadores de tareas totales y tareas pendientes:
  const todosCount = todos.length;
  const pendingTodosCount = todos.filter((todo) => !todo.done).length;

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};
