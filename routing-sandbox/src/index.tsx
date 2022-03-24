import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Layout from "./Layout/Layout";

ReactDOM.render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path='/' element={<Page1 />} />
                <Route path='/Page2' element={<Page2 />} />
                <Route path='/Page3' element={<Page3 />} />
            </Routes>
        </Layout>
    </BrowserRouter>,
  document.getElementById('root')
);
