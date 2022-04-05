import React from 'react';
import './TodoItem.css';

interface ITodoItem {
    text: string;
    isCompleted: boolean;
}

const TodoItem = ({ text, isCompleted }: ITodoItem) => ( // элемент 1 задачи
    <li className="todo-item">
        <i className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
        <span className={isCompleted ? 'completed text' : 'text'}>
            {text}
        </span>
        <i className="fas fa-times" />
    </li>
);

TodoItem.defaultProps = {
    text: '',
    isCompleted: false,
}

export default TodoItem;
