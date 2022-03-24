import { NavLink } from "react-router-dom";
import React from "react";
import './Layout.css';

interface ILayout {
    children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <>
            <ul>
                <li>
                    <NavLink className={(navData) => navData.isActive ? 'active' : '' } to="/">
                        Home Page 1
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Page2">
                        Home Page 2
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Page3">
                        Home Page 3
                    </NavLink>
                </li>
            </ul>
            { children }
        </>
    )
}

export default Layout;
