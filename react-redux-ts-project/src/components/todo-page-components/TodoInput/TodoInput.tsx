import React from 'react';
import './TodoInput.css';

interface ITodoInput {
    onChange: () => void,
    value: string,
}

const TodoInput = ({ value, onChange }: ITodoInput) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" />
        <input
            className="todo-input"
            placeholder="Click to add task"
            onChange={onChange}
            value={value}
        />
    </div>
);

TodoInput.defaultProps = {
    onChange: () => {},
    value: '',
}

export default TodoInput;
