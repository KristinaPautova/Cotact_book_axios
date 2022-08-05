import React, {useContext, useEffect} from 'react';
import './topicsDetails.css'
import {Link, useParams} from "react-router-dom";
import {topicsContext} from "../../context/TopicContextProvider";

const TopicsDetails = () => {

    let {id} = useParams()

    const {getTopicDetails, topicDetailsObj, deleteTopic} = useContext(topicsContext)

    useEffect(() => {
        getTopicDetails(id)
    },[id])

    return (
        <>
            <div className="containerTopicDetails">
                <div className="containerTopicDetailsLeft">
                    <img id="imgCards" src={topicDetailsObj.image} alt="img" />
                </div>
                <div className="containerTopicDetailsRight">
                    <div className="contImg"></div>
                    <h3 className="topicDetailsH3">{topicDetailsObj.title}</h3>
                    <p className="topicDetailsPT1">{topicDetailsObj.description}</p>
                    <p className="topicDetailsPT">Email: {topicDetailsObj.lib} </p>
                </div>
            </div>
            <div className="topicDetailsButtons">
                <Link to={`/edit/${id}`}>
                    <button className='btnCrud' id='edit'>✏️</button>
                </Link>
                <Link to='/list'>
                    <button className='btnCrud' onClick={() => deleteTopic(id)} id='del'>🗑</button>
                </Link>
            </div>
        </>
    );
};

export default TopicsDetails;