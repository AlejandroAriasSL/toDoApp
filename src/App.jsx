import './App.css'
import { Form } from './Components/Form/Form'
import { Todo } from './Components/Todo/Todo'
import { useTodos } from './hooks/useTodos'
import { BackgroundVideo } from './Components/BackgroundVideo/BackgroundVideo'
import { BackgroundAudio } from './Components/BackgroundAudio/BackgroundAudio'
function App() {

  const {todos, addTodo, removeTodo, favTodo} = useTodos();

  return (
    <>
    <BackgroundVideo></BackgroundVideo>
    <BackgroundAudio></BackgroundAudio>
    <div className="container">
      <h1 className ="title">OOP TODO LIST</h1>
      <Form addTodo={addTodo}></Form>
      <Todo todos={todos} removeTodo={removeTodo} favTodo={favTodo}></Todo>
      <span className="toggle-character"></span> 
    </div>
    </>
  )
}

export default App
