import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import './Layout.css';


const Layout = () => { // как правило Layout включает в себя повторяющиеся на каждой странице header, footer, иногда общее для всех
    // сайдбар меню
    return (
        <>
            <ul>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'active' : '' } to="/page1">
                        Home Page 1
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/page2">
                        Home Page 2
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/page3">
                        Home Page 3
                    </NavLink>
                </li>
            </ul>
            <Outlet /> {/*вместо children в оберточном роуте (который характерен для каждой страницы)*/}
        </>
    )
}

export default Layout;
