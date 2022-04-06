import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancers = // для подключения redux dev tools если приложение находится в dev mode и на стороне клиента
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);

const configureStore = (preloadedState: any) => ( // возвращает улучшенную (обновленную функцию) createStore
    // то есть configureStore является функцией высшего порядка
    createStore(
        rootReducer, // rootReducer - точка сбора всех reducers приложения
        preloadedState, // изначальное значение store
        enhancer, // для подключения redux dev tools к нашему store и при этом для использования redux thunk
    )
);

const store = configureStore({}); // здесь задается изначальное значение store - {}

export type Store = typeof store;
export type AppDispatch = Store['dispatch']

export default store;
