import React from 'react';
import './Input.css';

interface IInputProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void,
    value: string,
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void,
}

const Input = ({ onChange, value, onKeyPress }: IInputProps) => (
    <div className="inputWrapper">
        <i className="fas fa-search" />
        <input
            className="input"
            placeholder="Click to search"
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
        />
    </div>
);

Input.defaultProps = {
    onChange: () => {},
    onKeyPress: () => {},
    value: ''
}

Input.displayName = 'Input';

export default Input;
