import React, { useCallback, useEffect, useState } from 'react';

import Title from '../../components/common-components/Title/Title';
import NewsPost from '../../components/news-components/NewsPost/NewsPost';
import Input from '../../components/common-components/Input/Input';
import Select from '../../components/common-components/Select/Select';
import Pagination from '../../components/common-components/Pagination/Pagination';
import { BASE_PATH, SEARCH_PATH, SEARCH_PARAM, PAGE_HITS, PAGE_PARAM } from '../../constants/api-constants';

import './News.css';
import { HITS } from '../../components/common-components/Select/select-constants';

interface IResult {
    hits: IPost[],
    page: number,
    nbPages: number
}

interface INewsState {
    searchQuery: string,
    result: IResult,
    hitsPerPage: number,
    page: number,
}

export interface IPost {
    author: string,
    created_at: string,
    num_comments: number,
    title: string,
    points: number,
    url: string,
    objectID: string
}

const News = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [result, setResult] = useState<IResult | null>(null);
    const [hitsPerPage, setHitsPerPage] = useState<number>(20);
    const [page, setPage] = useState<number>(0);


    useEffect(() => {
        const fetchData = (searchQuery: INewsState['searchQuery'], hitsPerPage: INewsState['hitsPerPage'], page: INewsState['page']) => {
            fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
                .then(res => res.json() as Promise<IResult>)
                .then(result => setNews(result))
                .catch(error => error);
            };
        fetchData(searchQuery, hitsPerPage, page);

        return () => {
            console.log('components will unmount');
        }
    }, [searchQuery, hitsPerPage, page]);


    const setNews = (result: IResult) => { // для передачи полученной с сервера инфы в стейт
        console.log({result});
        setResult(result);
    }

    const handleInputChange = ({ target }: React.FormEvent<HTMLInputElement>) => {
        const { value } = target as HTMLInputElement;
        setSearchQuery(value);
    } // этот метод привязан к input - он осуществляет изменение стейта в зависимости от введенного
    // поискового запроса
    // для того, чтобы форма была управляема и при нажатии на клавишу enter
    // поисковой запрос можно было достать и использовать для запроса на сервер

    const getSearch = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
        if(key === 'Enter') {
            setPage(0);
        }
    }

    const handleHitsChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const { target: { value } } = e;
        setPage(0);
        setHitsPerPage(+value);
    }, []);

    const handlePageChange = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
        const btnType = (target as HTMLButtonElement).getAttribute('data-name');

        if(btnType && btnType.match(/[0-9]/)) { // проверка на содержание чисел
            updatePage(Number(btnType));
        } else {
            switch (btnType) {
                case 'next':
                    updatePage(page + 1);
                    break;
                case 'prev':
                    updatePage(page - 1);
                    break;
            }
        }
    }

    const updatePage = (number: INewsState['page']) => {
        setPage(number);
    }

    return (
        <div className="wrapper">
            <Title title="Hacker News" />

            <Select options={HITS} handleChange={handleHitsChange} value={hitsPerPage} />
            {/* для запроса на сервер: выбираем количество постов на странице, которые отправляем потом как 'hitsPerPage={hitsPerPage}' в fetch */}

            <Pagination
                onClick={handlePageChange}
                page={page}
                lastPage={result?.nbPages}
            />{/* для запроса на сервер: выбираем страницу, которая отправляется потом как 'page={page}' в fetch*/}

            <Input
                onKeyPress={getSearch}
                onChange={handleInputChange}
                value={searchQuery}
            />{/* для запроса на сервер: вводим слово для поиска постов, которое отправляется потом как 'query={searchQuery}' в fetch*/}
            {/* если ничего нет - выводит все подряд */}
            {/* если какое-то слово есть - то поиск постов, содержащих это слово */}
            {/* вводим в инпут поисковые слова */}
            {/* и тк компонент переиспользуемый - то передаем обработчики событий (getSearch и handleInputChange) извне */}

            <ul className="newsList">{/* полученный с сервера ответ: выведение полученных с сервера постов в виде списка с ключами*/}
                {result?.hits.map(({ author, created_at, num_comments, objectID, title, points, url }: IPost) =>
                    <NewsPost // компонент для описания 1-го поста в списке постов
                        key={objectID}
                        author={author}
                        created_at={created_at}
                        num_comments={num_comments}
                        title={title}
                        points={points}
                        url={url}
                    />
                )}
            </ul>
        </div>
    );
}

export default News;
