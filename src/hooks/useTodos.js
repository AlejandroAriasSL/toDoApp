import { useEffect, useState } from "react";

export const useTodos = () => {

    const [todos, setTodos] = useState(() => {
        const storedTodo = localStorage.getItem("todos");
        return storedTodo ? JSON.parse(storedTodo) : [];
    });

        const addTodo = (todos) => {
            setTodos(t => {
                const newTodo = {text: todos, isFavorite:false}
                const updatedTodo = [...t, newTodo];
                saveTodo(updatedTodo);
                return updatedTodo;
            })
        }

        const removeTodo = (index) => {
            setTodos(t => {
                const filteredTodo = t.filter((_,i) => i !== index)
                saveTodo(filteredTodo)
                return filteredTodo;
            })
        }

        const saveTodo = (todos) => {
            localStorage.setItem("todos", JSON.stringify(todos))
        }

        const favTodo = (oldIndex) => {
            setTodos(t => {
                const updatedTodos = [...t];
                updatedTodos[oldIndex] = {
                    ...updatedTodos[oldIndex], 
                    isFavorite: !updatedTodos[oldIndex].isFavorite
                };

                const [movedItem] = updatedTodos.splice(oldIndex, 1);

                if (movedItem.isFavorite) {
                    updatedTodos.unshift(movedItem);
                } else {
                    const nonFav = updatedTodos.findIndex(t => !t.isFavorite);
                    const reorderedTodos = nonFav !== -1 ? nonFav : updatedTodos.length;
                    updatedTodos.splice(reorderedTodos, 0, movedItem)
                }
                saveTodo(updatedTodos);
                return updatedTodos;    
            })
        }

        useEffect(() => {
            saveTodo(todos);
        }, [todos])
    

    return {todos, addTodo, removeTodo, favTodo};
}