import React from 'react';
import './TodoInput.css';

interface ITodoInput {
    onChange: (arg: React.FormEvent<HTMLInputElement>) => void,
    value: string,
    onKeyPress: (arg: React.KeyboardEvent<HTMLInputElement>) => void,
    addAsyncTasks: () => void,
}

const TodoInput = ({ value, onChange, onKeyPress, addAsyncTasks }: ITodoInput) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" onClick={addAsyncTasks} />
        <input
            onKeyPress={onKeyPress}
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
    onKeyPress: () => {}
}

export default TodoInput;
