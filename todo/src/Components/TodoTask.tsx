import React from 'react'
import { ITask } from '../Interfaces'

interface Props { 
    // Optional
    // task?: ITask;

    task: ITask;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
  return (
    <tr>
        <td>{task.taskName}</td>
        <td>{task.deadline}</td>
        <td><button className='btn-done' onClick={() => {completeTask(task.taskName)}}>X</button></td>
    </tr>
  )
}

export default TodoTask