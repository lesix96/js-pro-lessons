import React, { Component } from 'react';

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

interface INewsProps {}

export interface IPost {
    author: string,
    created_at: string,
    num_comments: number,
    title: string,
    points: number,
    url: string,
    objectID: string
}

class News extends Component<INewsProps, INewsState> {
    state = {
        searchQuery: '',
        result: {} as IResult,
        hitsPerPage: 20,
        page: 0,
    }

    componentDidMount() { // МЖЦ, из которого можно отправлять запрос на сервер при первой загрузке компонента
        const { searchQuery, hitsPerPage, page } = this.state;
        this.fetchData(searchQuery, hitsPerPage, page);
    }

    fetchData = (searchQuery: INewsState['searchQuery'], hitsPerPage: INewsState['hitsPerPage'], page: INewsState['page']) => {
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}&${PAGE_HITS}${hitsPerPage}&${PAGE_PARAM}${page}`)
            .then(res => res.json() as Promise<IResult>)
            .then(result => this.setNews(result))
            .catch(error => error);
    } // асинхронная фукнция, которая отправляет запрос на сервер,
    // а полученный ответ передает в другую функцию, которая помещает
    // его в стейт

    setNews = (result: IResult) => { // для передачи полученной с сервера инфы в стейт
        console.log({result});
        this.setState({ result });
    }

    // (event)
    // e = {
    //     target: {
    //         value: '123'
    //     }
    // }

    handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        this.setState({
            searchQuery: value
        })
    } // этот метод привязан к input - он осуществляет изменение стейта в зависимости от введенного
    // поискового запроса
    // для того, чтобы форма была управляема и при нажатии на клавишу enter
    // поисковой запрос можно было достать и использовать для запроса на сервер

    getSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const { key } = e;
        if(key === 'Enter') {
            const { searchQuery, hitsPerPage } = this.state;
            this.setState({
                page: 0,
            })
            this.fetchData(searchQuery, hitsPerPage, 0); // при нажати на клавишу enter после ввода
            // слова в инпут осуществляется поисковой запрос и обнуляется количество страниц в стейте (тк придет новое)
            // page: 0 - чтоб начинать с первой страницы
        }
    }

    handleHitsChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
        const { searchQuery } = this.state;

        this.setState({
            hitsPerPage: +value,
            page: 0
        }, () => {
            this.fetchData(searchQuery, this.state.hitsPerPage, 0); // при выборе нового количества постов на страницу
            // посылается новый запрос на сервер для этой страницы и обновляется стейт
            // page: 0 - чтоб начинать с первой страницы
        })
    }

    handlePageChange = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
        // срабатывает, когда мы нажимаем кнопку смены страницы
        const btnType = (target as HTMLButtonElement).getAttribute('data-name');
        let { page } = this.state;

        if(btnType && btnType.match(/[0-9]/)) { // проверка на содержание чисел
            this.updatePage(Number(btnType));
        } else {
            switch (btnType) {
                case 'next':
                    this.updatePage(page + 1);
                    break;
                case 'prev':
                    this.updatePage(page - 1);
                    break;
            }
        }
    }

    updatePage = (number: INewsState['page']) => {
        const { searchQuery, hitsPerPage } = this.state;
        this.setState({
            page: number,
        }, () => {
            this.fetchData(searchQuery, hitsPerPage, number);
            // при переходе по страницам происходит запрос к серверу для подтягивания новых постов
        })
    }

    render() {
        const { searchQuery, result, hitsPerPage } = this.state; // деструктуризация стейта для получения result
        const { hits = [], page, nbPages } = result; // деструктуризация result для получения значений изнутри него
        // это можно было бы заменить на
        // const { searchQuery, result: { hits = [], page, nbPages }, hitsPerPage } = this.state;

        return (
            <div className="wrapper">
                <Title title="Hacker News" />

                <Select options={HITS} handleChange={this.handleHitsChange} value={hitsPerPage} />
                {/* для запроса на сервер: выбираем количество постов на странице, которые отправляем потом как 'hitsPerPage={hitsPerPage}' в fetch */}

                <Pagination
                    onClick={this.handlePageChange}
                    page={page}
                    lastPage={nbPages}
                />{/* для запроса на сервер: выбираем страницу, которая отправляется потом как 'page={page}' в fetch*/}

                <Input
                    onKeyPress={this.getSearch}
                    onChange={this.handleInputChange}
                    value={searchQuery}
                />{/* для запроса на сервер: вводим слово для поиска постов, которое отправляется потом как 'query={searchQuery}' в fetch*/}
                {/* если ничего нет - выводит все подряд */}
                {/* если какое-то слово есть - то поиск постов, содержащих это слово */}
                {/* вводим в инпут поисковые слова */}
                {/* и тк компонент переиспользуемый - то передаем обработчики событий (getSearch и handleInputChange) извне */}

                <ul className="newsList">{/* полученный с сервера ответ: выведение полученных с сервера постов в виде списка с ключами*/}
                    {hits.map(({ author, created_at, num_comments, objectID, title, points, url }: IPost) =>
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
}

export default News;
