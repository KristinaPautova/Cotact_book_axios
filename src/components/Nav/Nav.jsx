import React, {useContext, useEffect} from 'react';
import './nav.css'
import {NavLink} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {AiOutlineHome} from 'react-icons/ai'
import {topicsContext} from "../../context/TopicContextProvider";

const Nav = () => {

    const {searchVal, setSearchVal, getTopics} = useContext(topicsContext)

    useEffect(() =>{
        getTopics()
    },[searchVal])


    return (
        <div className='navbar'>
            <NavLink id='svg' to='/'><AiOutlineHome/></NavLink>
            <NavLink to='/list'>Contact list</NavLink>
            <NavLink to='/add'>Add contact</NavLink>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearchVal(e.target.value) }
                />
                <Button variant="outline-success">Search</Button>
            </Form>
        </div>
    );
};

export default Nav;