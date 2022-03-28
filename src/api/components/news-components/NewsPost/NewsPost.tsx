import React from 'react';
import './NewsPost.css';

export interface INewsPostProps {
    author: string,
    created_at: string,
    num_comments: number,
    title: string,
    points: number,
    url: string,
}

const NewsPost = ({ author, created_at, num_comments, title, points, url }: INewsPostProps) => (
    <li className="news">
        <div className="description">
            <a href={url} className="newsTitle">{title}</a>
            <span className="text">{`${points} points`}</span>
            <span className="comments">{`${num_comments} comments`}</span>
            <span className="date">{new Date(created_at).toLocaleDateString()}</span>
            <span className="author">{author}</span>
        </div>
    </li>
);

NewsPost.defaultProps = {
    author: '',
    num_comments: 0,
    title: 'Here should be a title',
    points: 0,
    url: '#'
}

NewsPost.displayName = 'NewsPost';

export default NewsPost;
