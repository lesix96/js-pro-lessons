import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../../components/common-components/Layout/Layout";
import Page1 from "../../pages/page1/Page1";
import Page2 from '../../pages/page2/Page2';
import Page3 from '../../pages/page3/Page3';
import NotFoundPage from '../../pages/not-found-page/NotFoundPage';

const App = () => {
    return (
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route element={<Layout />}>
                    <Route path='/' element={<Navigate replace to="/page1" />} />
                    <Route path='/page1/*' element={<Page1 />} />
                    <Route path='/page2' element={<Page2 />} />
                    <Route path='/page3' element={<Page3 />} />
                    {/*
                        тк мы передаем в element целый компонент, то в него можно передавать пропсы
                        допустим, инфу, полученную в результате fetch-запроса в компоненте App
                        пример
                        <Route path='/page3' element={<Page3 users={users} />} />
                    */}
                </Route>
            </Routes>
    )
}

export default App;
