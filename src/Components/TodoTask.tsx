import React, { FC } from 'react';
import { ITask } from '../ITask';

interface Props {
    task: ITask,
    completeTask(taskNameTodelete: string): void
}

export const TodoTask: FC<Props> = ({ task, completeTask }: Props) => {
    return (
        <div className="task" >
            <div className="content">
                <span>{task.taskName} </span>
                <span> {task.deadline}</span>
            </div>
            <button onClick={() => { completeTask(task.taskName) } } >X</button>
        </div>
    );
}
