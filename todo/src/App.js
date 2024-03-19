
import './App.css';
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';

function App() {
  const todoItems =[
    {
      name:"Learn DSA",
      dueDate:"19/3/2024"
    },
    {
      name:"Learn React",
      dueDate:"19/3/2024"
    },
    {
      name:"Learn LLD",
      dueDate:"20/3/2024"
    }
  ]
  return <center class = 'todo-container'>
  <AppName/>
  <AddTodo/>
  <TodoItems todoItems={todoItems}/>
  <div class="container text-center">

</div>


    </center>;
}

export default App;
