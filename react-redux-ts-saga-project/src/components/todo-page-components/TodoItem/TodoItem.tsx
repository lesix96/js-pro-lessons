import React from 'react';
import './TodoItem.css';

interface ITodoItem {
    text: string;
    isCompleted: boolean;
    id: number;
    removeTask: (id: number) => void;
}

const TodoItem = ({ text, isCompleted, id, removeTask }: ITodoItem) => ( // элемент 1 задачи
    <li className="todo-item">
        <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
        <span className={isCompleted ? 'completed text' : 'text'}>
            {text}
        </span>
        <i className="fas fa-times" onClick={() => removeTask(id)} />
    </li>
);

TodoItem.defaultProps = {
    text: '',
    isCompleted: false,
}

export default TodoItem;
