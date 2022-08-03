import React from 'react';
import './nav.css'
import {NavLink} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {AiOutlineHome} from 'react-icons/ai'

const Nav = () => {
    return (
        <div className='navbar'>
            <NavLink id='svg' to='/home'><AiOutlineHome/></NavLink>
            <NavLink to='/'>Topic list</NavLink>
            <NavLink to='/add'>Add topic</NavLink>
            <NavLink to='/edit'>Edit topic</NavLink>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
};

export default Nav;