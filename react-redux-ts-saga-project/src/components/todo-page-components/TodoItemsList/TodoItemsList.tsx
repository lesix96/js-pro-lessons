import React from 'react';
import { ITask } from '../../../mock-data/todos';
import TodoItem from '../TodoItem/TodoItem';
import './TodoItemsList.css';

interface ITodoItemsList {
    tasksList: ITask[];
    removeTask: (id: number) => void;
    completeTask: (id: number) => void
}

const TodoItemsList = ({ tasksList, removeTask, completeTask }: ITodoItemsList) => (
    <ul className="todo-list">
        {tasksList.map(({ id, text, isCompleted }) => ( // рендерит массив передаваемых ему задач
            <TodoItem key={id} id={id} text={text} isCompleted={isCompleted} removeTask={removeTask} completeTask={completeTask} />
        ))}
    </ul>
);

TodoItemsList.defaultProps = {
    tasksList: [],
}

export default TodoItemsList;
