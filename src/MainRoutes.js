import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddTopic from "./components/AddTopic/AddTopic";
import EditTopic from "./components/EditTopic/EditTopic";
import TopicsList from "./components/TopicsList/TopicsList";
import Home from "./components/Home/Home";
import TopicsDetails from "./components/TopicsDetails/TopicsDetails";

const MainRoutes = () => {

    return (
        <Routes>
           <Route path='/' element={<Layout/>}>
               <Route index element={<Home/>}/>
            <Route path='list' element={<TopicsList/>}/>
            <Route path='edit' element={<EditTopic/>}/>
            <Route path='add' element={<AddTopic/>}/>
               <Route path='topicsDetails/:id' element={<TopicsDetails/>}/>
               <Route path='edit/:id' element={<EditTopic/>}/>
           </Route>
        </Routes>
    );
};

export default MainRoutes;