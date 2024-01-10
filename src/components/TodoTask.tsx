import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faPen} from "@fortawesome/free-solid-svg-icons";

interface Todo {
    task: {
        id: number;
        description: string;
        completed: boolean;
        isEdit: boolean;
    }
    completed: (id: number) => void;
    deleteTask: (id: number) => void;
    TodoEdit: (id: number) => void;
}

export function TodoTask({task, completed, deleteTask, TodoEdit} : Todo) {
    return (
        <div
            className={'relative flex bg-white w-[453px] h-[50px] px-5 py-3 rounded items-center'}
        >
            <p
                className={`${task.completed ? 'completed' : ''}`}
                onClick={() => completed(task.id)}
            >{task.description}</p>
            <div className={'flex items-center gap-5 absolute right-5'}>
                <FontAwesomeIcon icon={faPen} className={'cursor-pointer text-orange-600'} onClick={() => TodoEdit(task.id)}/>
                <FontAwesomeIcon icon={faTrash} className={'cursor-pointer text-orange-600'} onClick={() => deleteTask(task.id)}/>
            </div>
        </div>
    );

}

export default TodoTask;