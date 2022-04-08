import React, { Component } from 'react';
import './TodoList.css';
import TodoItemsList from "../../components/todo-page-components/TodoItemsList/TodoItemsList";
import TodoInput from '../../components/todo-page-components/TodoInput/TodoInput';
import Footer from '../Footer/Footer';
import { connect, ConnectedProps } from "react-redux";
import { addTask, removeTask } from '../../redux/actions/tasksActionCreators/actionCreator';
import { ITask } from "../../mock-data/todos";
import { AppDispatch } from '../../redux/store/store';
import { RootState } from '../../redux/reducers';

interface IPropsTodoList extends PropsFromRedux {}

interface IStateTodoList {
    activeFilter: string;
    taskText: string;
}

class TodoList extends Component<IPropsTodoList, IStateTodoList> {
    state = {
        activeFilter: 'all',
        taskText: ''
    }

    handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement;
        this.setState({
            taskText: value,
        })
    }

    handleAddTask = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
        const { taskText } = this.state;

        if (taskText.length > 0 && key === 'Enter') {
            const { addTask } = this.props;

            addTask({ id: (new Date()).getTime(), text: taskText, isCompleted: false });

            this.setState({
                taskText: '',
            })
        }
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks, removeTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.handleAddTask} value={taskText} onChange={this.handleInputChange} />
                {isTasksExist && <TodoItemsList tasksList={tasks} removeTask={removeTask} />}
                {isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { tasks } = state;
    return { tasks } // { tasks: [ { } { } ] } --> вмерживается в this.props
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addTask: ({id, text, isCompleted}: ITask) => {
            dispatch(addTask({ id, text, isCompleted }));
        },
        removeTask: (id: number) => {
            dispatch(removeTask(id));
        },
    } // { addTask: func } --> вмерживается в this.props
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(TodoList);
