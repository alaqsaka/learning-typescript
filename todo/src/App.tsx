import React, {FC, useState, ChangeEvent} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  // every function should have return type
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
    console.log(todoList)
  }

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete;
    }))
  }

  return (
    <div className="App">
      
     <div className='header'>
        <h1 className='title'>Todo List</h1>
        <div className="inputs">
          <div className='inputContainer'>
            <input type="text" placeholder='Task...' onChange={handleChange} name="task" value={task}/>
            <input type="number" placeholder='Deadline (in Days)...' onChange={handleChange} value={deadline} name="deadline" />
          </div>
          <button onClick={addTask}>Create new task</button>
        </div>
     </div>
     <div className="todoList">
      <div className="task">
        <div className="content">
          {todoList.length ? (
            <table>
            <thead>
              <td>Task</td>
              <td>Deadline (in Days)</td>
              <td>Is Done?</td>
            </thead>
            <tbody>
              {todoList.map((task: ITask, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask}/>
              })}
            </tbody>
          </table>
          ) : (
            <div>No task</div>
          )}
          
        </div>
      </div>
      
        
      </div>
    </div>
  );
}

export default App;
