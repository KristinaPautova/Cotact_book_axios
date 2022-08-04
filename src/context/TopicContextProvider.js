import React, {createContext, useReducer, useState} from 'react';
import axios from "axios";

const API = 'http://localhost:8000/contacts';

export const topicsContext = createContext();

const INIT_STAT = {
    contacts: [],
    topicDetails: {},
}

const reducer = (state = INIT_STAT , action) => {
    switch (action.type){
        case "GET_TOPICS":
            return {...state,contacts: action.payload };
        case "GET_TOPIC_DETAILS":
            return {...state,topicDetails: action.payload }
        default:
            return state
    }


}

let page = 1;
let totalPage = [];
let limit = 6;

const TopicContextProvider = ({children}) => {

    const [searchVal, setSearchVal] = useState('')

    const[state, dispatch] =useReducer(reducer, INIT_STAT)

    const addTopic = (topic) => {
        axios.post(API, topic);
    }

    const getTopics = async () => {
        totalPageFunc()
        const {data} = await axios.get(`${API}?_page=${page}&_limit=${limit}&q=${searchVal}`);
        let action = {
            type: "GET_TOPICS",
            payload: data
        }
        dispatch(action);
    }

    const getTopicDetails = async (id) => {
        const {data} = await axios(`${API}/${id}`);
        let action = {
            type: "GET_TOPIC_DETAILS",
            payload: data
        }
        dispatch(action);
    }

    const deleteTopic = async (id) => {
        await  axios.delete(`${API}/${id}`)
    }

    const editTopicPatch = async (id, editedTopic) =>{
        await axios.patch(`${API}/${id}`, editedTopic)
    }

    const totalPageFunc = async () => {
        let {data} = await axios(API);
        totalPage = Math.ceil(data.length / limit);
    }

    const prevPage = () => {
        if(page <= 1) return;
        page--;
        getTopics();
    };

    const nextPage = () => {
        if(totalPage <= page) return;
        page++;
        getTopics();
    }

    let cloud = {
        prevPage,
        nextPage,
        addTopic,
        getTopics,
        getTopicDetails,
        editTopicPatch,
        deleteTopic,
        setSearchVal,
        searchVal,
        topicsArr: state.contacts,
        topicDetailsObj: state.topicDetails
    }
    return (
        <topicsContext.Provider value={cloud}>
            {children}
        </topicsContext.Provider>
    );
};

export default TopicContextProvider;