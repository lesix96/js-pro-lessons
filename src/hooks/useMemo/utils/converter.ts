import {
    DOLLARS_TO_BEL_RUBLES_RATE,
    DOLLARS_TO_EUROS_RATE,
    DOLLARS_TO_RUBLES_RATE
} from "../constants/convert-constants";
import { useMemo } from "react";

export const useConverter = (dollars: number) => {
    return useMemo(() => {
        const euros = (dollars * DOLLARS_TO_EUROS_RATE).toFixed(2);
        const rubles = (dollars * DOLLARS_TO_RUBLES_RATE).toFixed(2);
        const belRubles = (dollars * DOLLARS_TO_BEL_RUBLES_RATE).toFixed(2);

        return { euros, rubles, belRubles };
    }, [dollars]);
}
