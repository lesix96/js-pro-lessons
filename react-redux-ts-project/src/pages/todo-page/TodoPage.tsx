import React, { Fragment } from 'react';
import Title from '../../components/common-components/Title/Title';
import TodoList from "../../containers/TodoListClass/TodoList";

const TodoPage = () => (
    <Fragment>
        <Title title="ToDo App" />
        <TodoList />
    </Fragment>
);

export default TodoPage;
