import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { TodoTask } from './Components/TodoTask';
import { ITask } from './ITask';


const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else if (event.target.name === "deadline") {
      console.log(event.target.value)
      setDeadline(+event.target.value)

    }
  }

  const addTask = (): void => {
    console.log(deadline);
    if (deadline) {
      const taskObj = { taskName: task, deadline: deadline }
      setTodoList([...todoList, taskObj])
      setTask("");
      setDeadline(0)
      console.log(todoList)
    }

  }
  const completTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((e: ITask) => { return e.taskName !== taskNameToDelete }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer" >
          <input type="text" placeholder="Task..." name="task" value={task} onChange={handleChange} />
          <input type="number" placeholder="Deadline (in Days)..." name="deadline" value={deadline} onChange={handleChange} />
        </div>

        <button onClick={addTask} >Add Task</button>
      </div>
      <div className="todoList"> {todoList.map((taskO: ITask, index) => { return <TodoTask key={index} task={taskO} completeTask={completTask} /> })} </div>
    </div>
  );
}

export default App;
