import React from 'react';
import './Select.css';
import { IHit } from './select-constants';

interface ISelectProps {
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    options: IHit[],
    value: number
}

const Select = ({ handleChange, options, value }: ISelectProps) => (
    <div className="selectWrapper">
        <select onChange={handleChange} value={value}>
            {options.map(({ value, label }) =>
                <option key={value} value={value}>{label}</option>
            )}
        </select>
        <span className="selectText">per page</span>
    </div>
);

Select.defaultProps = {
    onChange: () => {},
    options: [],
    value: 0,
}

Select.displayName = 'Select';

export default Select;
