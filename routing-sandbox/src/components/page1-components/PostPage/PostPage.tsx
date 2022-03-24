import React from 'react';

const PostPage = ({ data }: { data: any }) => {
    return (
        <>
            <div>completed: {data.completed.toString()}</div>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
            <div>userId: {data.userId}</div>
        </>
    )
}

export default PostPage;
