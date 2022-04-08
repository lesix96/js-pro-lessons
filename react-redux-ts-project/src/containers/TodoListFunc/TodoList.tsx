import React, { useCallback, useMemo, useState } from 'react';
import './TodoList.css';
import TodoItemsList from "../../components/todo-page-components/TodoItemsList/TodoItemsList";
import TodoInput from '../../components/todo-page-components/TodoInput/TodoInput';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask, completeTask } from '../../redux/actions/tasksActionCreators/actionCreator';
import { ITask } from "../../mock-data/todos";
import { taskSelector } from "../../redux/selectors/tasksSelectors/tasksSelectors";
import { filtersSelector } from "../../redux/selectors/filterSelectors/filtersSelectors";
import { changeFilter } from "../../redux/actions/filtersActionCreators/actionCreator";

const TodoList = () => {
    const [taskText, setTaskText] = useState('');

    // start

    // const { tasks, removeTask, filter, filterChange, completeTask, addTask } = props;
    // =
    const tasks = useSelector(taskSelector);
    const filter = useSelector(filtersSelector);
    // +
    const dispatch = useDispatch();
    const dispatchedAddTask = useCallback(
        (task: ITask) => dispatch(addTask({ id: task.id, text: task.text, isCompleted: task.isCompleted })),
        [dispatch]
    );
    const dispatchedRemoveTask = useCallback(
        (id: number) => dispatch(removeTask(id)),
        [dispatch]
    );
    const dispatchedFilterChange = useCallback(
        (filter: string) => dispatch(changeFilter(filter)),
        [dispatch]
    );
    const dispatchedCompleteTask = useCallback(
        (id: number) => dispatch(completeTask(id)),
        [dispatch]
    );

    // end

    const handleInputChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement;
        setTaskText(value);
    }, []);

    const handleAddTask = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;

        if (taskText.length > 0 && key === 'Enter') {
            dispatchedAddTask({ id: (new Date()).getTime(), text: taskText, isCompleted: false });
            setTaskText('');
        }
    }, [])

    const isTasksExist = useMemo(() => tasks && tasks.length > 0, [tasks]);

    const filterTasks = useCallback((tasks: ITask[]) => {
        switch (filter) {
            case 'active':
                return tasks.filter(item => !item.isCompleted);
            case 'completed':
                return tasks.filter(item => item.isCompleted);
            default:
                return tasks;
        }
    }, [filter, tasks]);

    const filteredTasks = useMemo(() => filterTasks(tasks), [tasks, filterTasks]);

    return (
        <div className="todo-wrapper">
            <TodoInput onKeyPress={handleAddTask} value={taskText} onChange={handleInputChange} />
            {isTasksExist && <TodoItemsList tasksList={filteredTasks} removeTask={dispatchedRemoveTask} completeTask={dispatchedCompleteTask} />}
            {isTasksExist && <Footer amount={tasks.length} activeFilter={filter} filterChange={dispatchedFilterChange} />}
        </div>
    );
}

export default TodoList;
