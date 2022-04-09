import React, { Component } from 'react';
import './TodoList.css';
import TodoItemsList from "../../components/todo-page-components/TodoItemsList/TodoItemsList";
import TodoInput from '../../components/todo-page-components/TodoInput/TodoInput';
import Footer from '../Footer/Footer';
import { connect, ConnectedProps } from "react-redux";
import { addTask, removeTask, completeTask } from '../../redux/actions/tasksActionCreators/actionCreator';
import { ITask } from "../../mock-data/todos";
import { AppDispatch } from '../../redux/store/store';
import { RootState } from '../../redux/reducers';
import { changeFilter } from "../../redux/actions/filtersActionCreators/actionCreator";

interface IPropsTodoList extends PropsFromRedux {}

interface IStateTodoList {
    taskText: string;
}

class TodoList extends Component<IPropsTodoList, IStateTodoList> {
    state = {
        taskText: ''
    }

    handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement;
        this.setState({
            taskText: value,
        })
    }

    handleAddTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;

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
        const { taskText } = this.state;
        const { tasks, removeTask, filter, filterChange, completeTask } = this.props;
        const isTasksExist = tasks && tasks.length > 0;

        const filterTasks = (tasks: ITask[]) => {
            switch (filter) {
                case 'active':
                    return tasks.filter(item => !item.isCompleted);
                case 'completed':
                    return tasks.filter(item => item.isCompleted);
                default:
                    return tasks;
            }
        }

        const filteredTasks = filterTasks(tasks);

        return (
            <div className="todo-wrapper">
                <TodoInput onKeyPress={this.handleAddTask} value={taskText} onChange={this.handleInputChange} />
                {isTasksExist && <TodoItemsList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask} />}
                {isTasksExist && <Footer amount={tasks.length} activeFilter={filter} filterChange={filterChange} />}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState) => {
    const { tasks, filter } = state;
    return { tasks, filter } // { tasks: [ {}, {} ] } --> вмерживается в this.props
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        addTask: ({id, text, isCompleted}: ITask) => {
            dispatch(addTask({ id, text, isCompleted }));
        },
        removeTask: (id: number) => {
            dispatch(removeTask(id));
        },
        filterChange: (filter: string) => {
            dispatch(changeFilter(filter));
        },
        completeTask: (id: number) => {
            dispatch(completeTask(id));
        }
    } // { addTask: func, removeTask: func } --> вмерживается в this.props
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
); // точка соприкосновения реакта и редакса

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(TodoList);
