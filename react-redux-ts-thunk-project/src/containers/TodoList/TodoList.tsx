import React, { Component } from 'react';
import './TodoList.css';
import TodoItemsList from "../../components/todo-page-components/TodoItemsList/TodoItemsList";
import TodoInput from '../../components/todo-page-components/TodoInput/TodoInput';
import Footer from '../Footer/Footer';
import { connect, ConnectedProps } from "react-redux";
import { addTask, getTodos } from '../../redux/actions/tasksActionCreators/actionCreator';
import { ITask } from "../../mock-data/todos";
import { RootState } from '../../redux/reducers';
import { ThunkDispatch } from 'redux-thunk';
import Loader from "../../components/common-components/Loader/Loader";

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

            addTask({ id: (new Date()).getTime(), text: taskText, isCompleted: false});

            this.setState({
                taskText: '',
            })
        }
    }

    componentDidMount() {
        const { getTodos } = this.props;
        getTodos();
    }

    render() {
        const { activeFilter, taskText } = this.state;
        const { tasks, isLoading } = this.props;
        const isTasksExist = tasks && (tasks as ITask[]).length > 0;

        return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.handleAddTask} value={taskText} onChange={this.handleInputChange} />
                {!isLoading ? <TodoItemsList tasksList={tasks} /> : <Loader />}
                {isTasksExist && <Footer amount={(tasks as ITask[]).length} activeFilter={activeFilter} />}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { tasks: { tasks, isLoading } } = state;
    return { tasks, isLoading }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
    return {
        addTask: ({id, text, isCompleted}: ITask) => {
            dispatch(addTask({ id, text, isCompleted }));
        },
        getTodos: async () => {
            await dispatch(getTodos());
        }
    }
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(TodoList);
