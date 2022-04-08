import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer/tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    //users: usersReducer,
    //cards: cardsReducer,
    //filter: filtersReducer,
    //basket: basketReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
