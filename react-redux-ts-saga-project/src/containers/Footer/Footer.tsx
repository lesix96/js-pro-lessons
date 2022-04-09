import React from 'react';
import './Footer.css';
import { FILTERS_BTN } from '../../mock-data/todos';

interface IFooter {
    amount: number;
    activeFilter: string;
    filterChange: (filter: string) => void;
}

const Footer = ({ amount, activeFilter, filterChange }: IFooter) => ( // принимает активный фильтр и количество оставшихся тасок
    // кнопка активного фильтра загорается другим цветом
    // а количество оставшихся выводится на экран (чтоб не считать)
    <div className="footer">
        <span className="amount">{`${amount} Tasks left`}</span> {/* количество оставшихся */}
        <div className="btn-group">
            { FILTERS_BTN.map(({ text, id }) => ( // кнопки фильтров
                <button
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                    onClick={() => filterChange(id)}
                >
                    {text}
                </button>
            )) }
        </div>
    </div>
);

Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
}

export default Footer;
