import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";
import TodoTaskEdit from "./TodoTaskEdit";

interface Todo {
    id: number;
    description: string;
    completed: boolean;
    isEdit: boolean;
}

export function TodoWrapper() {
    const [todos, setTodos] = useState<Todo[]>([])
    const addTask = (value: string) => {
        setTodos([...todos, {id: Math.random(), description: value, completed: false, isEdit: false}])
    }

    const completed = (id: number) => {
        setTodos(todos.map(task => task.id === id ? {...task, completed: !task.completed} : task ))
    }

    const deleteTask = (id:number) => {
        setTodos(todos.filter(task => task.id !== id))
    }

    const TodoEdit = (id:number) => {
        setTodos(todos.map(task => task.id === id ? {...task, isEdit: !task.isEdit} : task ))
    }

    const editTask = (id:number, description: string) => {
        setTodos(todos.map(task => task.id === id ? {...task, description, isEdit: !task.isEdit} : task ))
    }

    return (
        <div
            className={'wrapper flex flex-col gap-4'}
        >
            <TodoForm addTask={addTask}/>
            {todos.map((task, index) =>
                task.isEdit ? (
                    <TodoTaskEdit editTask={editTask} task={task}/>
                    ) : (
                    <TodoTask task={task} key={index}
                              completed={completed} deleteTask={deleteTask}
                              TodoEdit={TodoEdit}
                    />
                )
            )}
        </div>
    );

}

export default TodoWrapper;