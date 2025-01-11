import './components/addtodo.tsx'
import Todos from './components/todos.tsx'
import AddToDo from './components/addtodo.tsx'
import Navbar from './components/navbar.tsx'
import './App.css'
const App = () => {
  return (
    <main>
      <h1>
      TaskMaster
      </h1>
      <Navbar/>
     <AddToDo/>
     <Todos/>
    </main>
  )
}

export default App