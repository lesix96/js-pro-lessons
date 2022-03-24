import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../../components/common-components/Layout/Layout";
import Page1 from "../page1/Page1";
import Page2 from '../page2/Page2';
import Page3 from '../page3/Page3';
import PostPage from "../../components/page1-components/PostPage/PostPage";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate replace to="/page1" />} />
                <Route path='/page1/*' element={<Page1 />} />
                <Route path='/page2' element={<Page2 />} />
                <Route path='/page3' element={<Page3 />} />
            </Routes>
        </Layout>
    )
}

export default App;
