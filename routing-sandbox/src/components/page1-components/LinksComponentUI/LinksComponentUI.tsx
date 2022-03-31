import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import PostPage from "../PostPage/PostPage";

interface ILinksComponentUIProps {
    readonly data: any
}

const LinksComponentUI = ({ data: { data } }: ILinksComponentUIProps) => {
    console.log(data);

    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ maxWidth: 500, marginRight: 30 }}>
                    <ul>
                        { data.map((item: any) => {
                            return (
                                <li key={item.id}>
                                    <NavLink key={item.id} className={(navData) => navData.isActive ? 'active' : '' } to={`/page1/${item.id}`}>
                                        <div>{item.title}</div>
                                    </NavLink>
                                </li>
                            )
                        }) }
                    </ul>
                </div>
                <div>
                    <Routes>
                        { data.map((item: any) => {
                            return <Route key={item.id} path={`${item.id}`} element={<PostPage data={item} />} />
                        }) }
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default LinksComponentUI;
