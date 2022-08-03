import React from 'react';
import { Outlet } from 'react-router-dom'
import Nav from "../Nav/Nav";

const Layout = () => {
    let styleObj = {
        width: '100vw',
        height: '50px',
        backgroundColor: 'black',
        position: 'absolute',
        bottom: '0',
        color: 'white',
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    }
    return (
        <div>
            <Nav/>
            <Outlet/>
            <footer style={styleObj}>@makers 2022</footer>
        </div>
    );
};

export default Layout;