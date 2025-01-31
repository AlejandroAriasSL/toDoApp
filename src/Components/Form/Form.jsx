
import "./Form.css"
import { useState } from "react";



export function Form({addTodo}) {


    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") return;
        addTodo(inputValue);
        setInputValue("");
        console.log(inputValue)
    }
    

    return (
        <form className="form" data-form onSubmit={handleSubmit}>
            <input id="todo-input" type="text" placeholder="Todo..." data-input onChange={handleChange}
            value={inputValue}></input>
            <button className="btn" type="submit">Submit</button>
        </form>
    )
}