import React from 'react';
import { ITask } from '../../../mock-data/todos';
import TodoItem from '../TodoItem/TodoItem';
import './TodoItemsList.css';

interface ITodoItemsList {
    tasksList: ITask[],
}

const TodoItemsList = ({ tasksList }: ITodoItemsList) => (
    <ul className="todo-list">
        {tasksList.map(({ id, text, isCompleted }) => ( // рендерит массив передаваемых ему задач
            <TodoItem key={id} text={text} isCompleted={isCompleted} />
        ))}
    </ul>
);

TodoItemsList.defaultProps = {
    tasksList: [],
}

export default TodoItemsList;
