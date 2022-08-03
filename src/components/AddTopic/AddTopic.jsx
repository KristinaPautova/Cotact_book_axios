import React, {useContext, useState} from 'react';
import './addTopic.css'
import {InputGroup, FormControl,Button } from "react-bootstrap";
import {topicsContext} from "../../context/TopicContextProvider";
import showToast from "../helpers/ShowToast";

const AddTopic = () => {

    const {addTopic} = useContext(topicsContext)
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [lib, setLib] = useState('')

    function handleClick(){
        if (!title || !description || !image || !lib ) {
            showToast('Заполните поля', 'error')
            return;
        }
    let newObj = {
        title,
        description,
        image,
        lib
    }

    addTopic(newObj)

        setTitle('');
        setDescription('');
        setImage('');
        setLib('');
    }

    return (
        <>
            <div className="containerAddTopic">
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
                    <FormControl
                        placeholder="Добавьте название"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setTitle(e.target.value)}
                        value={title}
                    />
                </InputGroup>
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Описание</InputGroup.Text>
                    <FormControl
                        placeholder="Добавьте описание"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setDescription(e.target.value)}
                        value={description}
                    />
                </InputGroup>
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Картинка</InputGroup.Text>
                    <FormControl
                        placeholder="Вставьте ссылку на картинку"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setImage(e.target.value)}
                        value={image}
                    />
                </InputGroup>
                <InputGroup className="addTopic-inputs mb-3">
                    <InputGroup.Text id="basic-addon1">Ссылка</InputGroup.Text>
                    <FormControl
                        placeholder="Вставьте ссылку на информацию"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        onChange={(e)=> setLib(e.target.value)}
                        value={lib}
                    />
                </InputGroup>
                <Button onClick={handleClick} className="addTopic-btn">Добавить</Button>
            </div>

        </>
    );
};

export default AddTopic;