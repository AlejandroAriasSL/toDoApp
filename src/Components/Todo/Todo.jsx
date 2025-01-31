import "./Todo.css"
import { useRef, useState } from "react";
import { useSortable } from "../../hooks/useSortable"

export function Todo(props) {

    const [favorite, setFavorite] = useState([]);
    const listRef = useRef();

    useSortable(listRef, (oldIndex, newIndex) => {
        const reorderedTodos = [...props.todos];
        const movedItem = reorderedTodos.splice(oldIndex, 1)[0];
        reorderedTodos.splice(newIndex, 0, movedItem);
    })


    return (
        <div className="lists" data-lists ref={listRef}>
            {props.todos.map((todo, index) => (
            <div className="todo" key={index}>
                <p className="todo-txt">{todo.text}</p>
                <div className="todo-icons">
                    <svg onClick={() => props.favTodo(index)} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 576 512"><path fill={todo.isFavorite ? "#FFD43B": "#cbd7eb"} d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                    <span className="remove" data-id onClick={() => props.removeTodo(index)}></span>
                </div>
            </div>
            ))}
        </div>
    )
}