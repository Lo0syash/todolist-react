import React, {useState} from 'react';

interface addProps {
    addTask: (description: string) => void;
}

export function TodoForm({addTask}: addProps) {
    const [value, setValue] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTask(value)
        setValue('')
    }
    return (
        <form
            className={'flex items-center'}
            onSubmit={handleSubmit}
        >
            <input
                className={'w-[350px] h-[50px] rounded-l pl-4 outline-none'}
                type="text"
                onChange={e=>setValue(e.target.value)}
                placeholder={'Write your task'}
                value={value}
            />
            <input
                className={'h-[50px] px-5 text-white bg-orange-600 rounded-r cursor-pointer'}
                type="submit"
                value={'Add Task'}
            />
        </form>
    );

}

export default TodoForm;