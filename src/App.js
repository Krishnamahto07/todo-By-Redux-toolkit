import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
function App() {
  return (
    <div className='bg-blue-500 mt-[-20px] flex flex-col m-auto w-full h-[110vh]'>
      <div className='mx-auto '>
      <h1 className='font-bold text-3xl mt-8'>Make Your Todo List 🍸</h1>
        <AddTodo />
          <Todos />

      </div>
    </div>
      
  );
}

export default App;
