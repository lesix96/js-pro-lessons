import axios from "axios";
import { IAxiosResponse } from "../../redux/sagas/tasksSagas/tasksSagas";
import { FETCH_BASE, FETCH_GET_TODOS } from "../constants";

export const getTodos = () =>
    axios
        .get<IAxiosResponse[]>(`${FETCH_BASE}${FETCH_GET_TODOS}`)
