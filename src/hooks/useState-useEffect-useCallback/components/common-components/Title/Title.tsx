import React from 'react';
import './Title.css';

interface ITitleProps {
    title: string;
}

const Title = ({ title }: ITitleProps) => (
    <h1 className="title">{title}</h1>
);

Title.defaultProps = {
    title: 'Simple title',
}

Title.displayName = 'Title';

export default Title;
