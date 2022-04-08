import React from 'react';
import './Title.css';

interface ITitle {
    title: string,
}

const Title = ({ title }: ITitle) => (
    <h1 className="title">{title}</h1>
);

Title.defaultProps = {
    title: 'Simple title',
}

export default Title;
