import "./Container.css"
import { Form } from "../Form/Form"
import { Todo } from "../Todo/Todo"
import { useTodos } from "../../hooks/useTodos"
export function Container () {

    const {todos, addTodo, removeTodo, favTodo} = useTodos();

    return (
        <div className="container">
            <h1 className ="title">OOP TODO LIST</h1>
            <Form addTodo={addTodo}></Form>
            <Todo todos={todos} removeTodo={removeTodo} favTodo={favTodo}></Todo>
            <span className="toggle-character"></span> 
        </div>
    )
}
