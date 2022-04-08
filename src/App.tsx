import React, { useState } from 'react';
import './index.css';

type FormElement = React.FormEvent<HTMLFormElement>;

interface Task {
  description: string;
  completed: boolean; 
}

function App() {

  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault(); // Avoid default behaviour of a form -> reload page
    if (newTask !== '') {
      addTask(newTask);
      setNewTask('');
    } else {
      alert("Please enter a task.");
    }
  }

  const addTask = (description: string) => {
    const aux: Task[] = [...tasks, {description, completed: false}];
    setTasks(aux);
    console.log(aux);
  }

  const completeTask = (i: number) => {
    const aux: Task[] = [...tasks];
    tasks[i].completed = !tasks[i].completed;
    setTasks(aux);
  }

  const removeTask = (i: number) => {
    const aux: Task[] = [...tasks];
    aux.splice(i, 1);
    setTasks(aux);
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <header>
          <h1>To Do App</h1>
        </header>

        <form className='input-form' onSubmit={handleSubmit}>
          <input type="text" placeholder='Write your task here' autoFocus
            value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
          <button type="submit" className='input-button' title="Create task">Save</button>
        </form>

        <div className="task-wrapper">
          {
            tasks.map((t: Task, i: number) => (
              <div className="task" key={i} style={{backgroundColor: t.completed ? '#7fff00' : 'white'}}>
                <h2 style={{textDecoration: t.completed ? 'line-through' : ''}}>{t.description}</h2>
                <button className="complete-task" onClick={() => completeTask(i)} title="Mark as completed">✓</button>
                <button className="erase-task" onClick={() => removeTask(i)} title="Remove task">✗</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
