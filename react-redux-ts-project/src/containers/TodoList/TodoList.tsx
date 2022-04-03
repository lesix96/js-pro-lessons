import React, { Component } from 'react';
import './TodoList.css';
import TodoItemsList from "../../components/todo-page-components/TodoItemsList/TodoItemsList";
import TodoInput from '../../components/todo-page-components/TodoInput/TodoInput';
import Footer from '../../components/common-components/Footer/Footer';
import { TASKS } from '../../mock-data/todos';

class TodoList extends Component {
    state = {
        activeFilter: 'all',
    }

    render() {
        const { activeFilter } = this.state;
        const tasksList = TASKS;
        const isTasksExist = tasksList && tasksList.length > 0;

        return (
            <div className="todo-wrapper">
                <TodoInput />
                {isTasksExist && <TodoItemsList tasksList={tasksList} />}
                {isTasksExist && <Footer amount={tasksList.length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

export default TodoList;
