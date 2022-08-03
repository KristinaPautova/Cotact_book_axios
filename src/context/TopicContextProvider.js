import React, {createContext, useReducer} from 'react';
import axios from "axios";

const API = 'http://localhost:8000/contacts';

export const topicsContext = createContext();

const INIT_STAT = {
    contacts: [],
}

const reducer = (state = INIT_STAT , action) => {
    switch (action.type){
        case "GET_TOPICS":
            return {...state,contacts: action.payload }
        default:
            return state
    }


}


const TopicContextProvider = ({children}) => {
    const[state, dispatch] =useReducer(reducer, INIT_STAT)

    const addTopic = (topic) => {
        axios.post(API, topic);
    }

    const getTopics = async () => {
        const {data} = await axios.get(API);
        let action = {
            type: "GET_TOPICS",
            payload: data
        }
        dispatch(action);
    }

    let cloud = {
        addTopic,
        getTopics,
        topicsArr: state.contacts
    }
    return (
        <topicsContext.Provider value={cloud}>
            {children}
        </topicsContext.Provider>
    );
};

export default TopicContextProvider;