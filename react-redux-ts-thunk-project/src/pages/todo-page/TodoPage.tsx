import React from 'react';
import Title from '../../components/common-components/Title/Title';
import TodoList from "../../containers/TodoList/TodoList";

const TodoPage = () => (
    <>
        <Title title="ToDo App" />
        <TodoList />
    </>
);

export default TodoPage;
