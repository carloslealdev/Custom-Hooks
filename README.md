# Mis Custom Hooks Personales

---

¡Bienvenido a mi colección personal de **custom hooks** para React! Este repositorio es un compendio de utilidades reusables que he desarrollado para optimizar y simplificar el desarrollo de mis aplicaciones React. Aquí encontrarás soluciones prácticas para manejar contadores, realizar peticiones HTTP, gestionar estados de formularios y administrar listas de tareas.

## Hooks Disponibles

---

Aquí tienes un vistazo a los hooks que encontrarás en este repositorio, junto con una breve descripción de lo que ofrece cada uno:

### `useCounter`

Un hook simple y versátil para manejar el estado de un contador numérico. Permite incrementar, decrementar, resetear y establecer un valor específico, ideal para cualquier funcionalidad que requiera control numérico.

**Características:**

- Incrementa el contador.
- Decrementa el contador.
- Resetea el contador a su valor inicial.
- Establece un valor específico para el contador.

### `useFetch`

Simplifica la lógica para realizar peticiones HTTP (GET, POST, PUT, DELETE, etc.) a APIs externas. Este hook maneja los estados de carga (`loading`), errores (`error`) y los datos (`data`) recibidos, lo que te permite integrar fácilmente datos remotos en tus componentes.

**Características:**

- Manejo automático del estado de carga.
- Captura y reporta errores en las peticiones.
- Devuelve los datos de la respuesta.
- Configurable para diferentes métodos HTTP y opciones de petición.

### `useForms`

Un hook diseñado para gestionar de manera eficiente el estado de formularios en React. Facilita la recolección de datos de los campos de entrada, la validación y el reseteo del formulario, haciendo que la creación de formularios sea mucho más sencilla.

**Características:**

- Manejo automático del estado de los campos del formulario.
- Capacidad para resetear el formulario.
- Integra fácilmente la validación de campos.

### `useTodos`

Ideal para aplicaciones que necesitan gestionar una lista de tareas (todos). Este hook proporciona la lógica para agregar, eliminar, marcar como completadas y actualizar tareas, encapsulando toda la funcionalidad CRUD para una lista de "todos".

**Características:**

- Agrega nuevas tareas.
- Elimina tareas existentes.
- Marca tareas como completadas o pendientes.
- Actualiza el texto de una tarea.

## Cómo Usar

---

Cada hook está diseñado para ser independiente y fácil de integrar en tus proyectos React. Simplemente copia el archivo del hook que necesites en tu proyecto e impórtalo donde lo vayas a usar.

```jsx
// Ejemplo de uso de useCounter
import React from "react";
import { useCounter } from "./hooks/useCounter"; // Asegúrate de la ruta correcta

const CounterComponent = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterComponent;
```
