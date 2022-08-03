import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddTopic from "./components/AddTopic/AddTopic";
import EditTopic from "./components/EditTopic/EditTopic";
import TopicsList from "./components/TopicsList/TopicsList";
import Home from "./components/Home/Home";

const MainRoutes = () => {

    return (
        <Routes>
           <Route path='/' element={<Layout/>}>
            <Route index element={<TopicsList/>}/>
            <Route path='edit' element={<EditTopic/>}/>
               <Route path='home' element={<Home/>}/>
            <Route path='add' element={<AddTopic/>}/>
           </Route>
        </Routes>
    );
};

export default MainRoutes;