import { combineReducers } from 'redux';
import { filtersReducer } from './filtersReducer/filtersReducer';
import tasksReducer from './tasksReducer/tasksReducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    filter: filtersReducer,
    //users: usersReducer,
    //cards: cardsReducer,
    //filter: filtersReducer,
    //basket: basketReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
