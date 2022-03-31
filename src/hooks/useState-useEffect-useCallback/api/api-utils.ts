import { BASE_PATH, PAGE_HITS, PAGE_PARAM, SEARCH_PARAM, SEARCH_PATH } from "../constants/api-constants";

export async function fetchRequest <T>(searchQuery: string, hitsPerPage: number, page: number): Promise<T> {
    const response = await fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
    const result = await response.json()
    return result;
}
